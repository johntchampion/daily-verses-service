import { db } from '../client'
import { columnExists } from '../introspect'

/** schema.sql's CREATE TABLEs are IF NOT EXISTS, so they are inert against a
    database that already has the table: columns that arrive or leave after the
    table exists have to be applied here. */
function addColumnIfMissing(
  table: string,
  column: string,
  definition: string,
): void {
  if (columnExists(table, column)) return
  db.exec(`ALTER TABLE ${table} ADD COLUMN ${column} ${definition}`)
}

export function migrateAddColumns(): void {
  // The default backfills existing users to what they were already reading.
  addColumnIfMissing('users', 'translation', "TEXT NOT NULL DEFAULT 'WEB'")

  // Nullable: NULL reads as "answered, unknown" rather than as a miss.
  addColumnIfMissing('session_exercise', 'correct', 'INTEGER')

  // Nullable: a day planned before stages were pinned keeps rendering at the
  // verse's live stage until the day rolls over.
  addColumnIfMissing('session_exercise', 'stage', 'TEXT')

  // Opt-in: an existing user shouldn't start getting reminders just because
  // the column arrived.
  addColumnIfMissing('users', 'reminders_enabled', 'INTEGER NOT NULL DEFAULT 0')
  addColumnIfMissing('users', 'reminder_last_sent_date', 'TEXT')

  // 0 so every token already in the wild keeps verifying: requireAuth reads a
  // missing `tv` claim as 0 too, and the two have to agree or the deploy that
  // adds this column signs everyone out.
  addColumnIfMissing('users', 'token_version', 'INTEGER NOT NULL DEFAULT 0')
}

function dropColumnIfPresent(table: string, column: string): void {
  if (!columnExists(table, column)) return
  db.exec(`ALTER TABLE ${table} DROP COLUMN ${column}`)
}

/**
 * Runs before the cascade rebuilds, which copy a fixed column list and so need
 * every table already normalized to its current shape.
 */
export function migrateDropColumns(): void {
  // Learning tiers no longer fall, so nothing stamps a downgrade date and the
  // per-day cap is an upgrade cap. Dropping it loses no progress: stage, the
  // streak counters and the schedule are all untouched, and a verse that was
  // downgraded under the old rule simply stays where it is and climbs out.
  dropColumnIfPresent('user_verse', 'last_downgrade_date')
}
