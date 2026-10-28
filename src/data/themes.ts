/**
 * Groupings a user can pull to the front of the queue; nothing in the
 * progression model depends on them. Curated by content, so a verse may appear
 * in several themes or none, and a theme's verseIds are its own reading order.
 */
import { versesInOrder } from './verses'

export interface Theme {
  id: string
  name: string
  verseIds: string[]
}

export const THEMES: Theme[] = [
  {
    id: 'nature-of-god',
    name: 'The Nature of God',
    verseIds: [
      'gen-1-1',
      'exod-3-14-15',
      'deut-6-4-5',
      'isa-46-9-10',
      'ps-90-2',
      'mal-3-6',
      '1john-4-8',
      'ps-139-7-10',
    ],
  },
  {
    id: 'trinity',
    name: 'The Trinity',
    verseIds: ['matt-28-19', '2cor-13-14', 'john-14-16-17', 'gen-1-26'],
  },
  {
    id: 'deity-of-christ',
    name: 'The Deity of Christ',
    verseIds: [
      'john-1-1-3',
      'john-8-58',
      'col-2-9',
      'heb-1-3',
      'phil-2-6-7',
      'rev-1-17-18',
      'john-20-28',
      'isa-9-6',
    ],
  },
  {
    id: 'humanity-of-christ',
    name: 'The Humanity of Christ',
    verseIds: ['john-1-14', 'heb-2-17', 'heb-4-15'],
  },
  {
    id: 'scripture',
    name: 'Scripture and Revelation',
    verseIds: ['2tim-3-16-17', '2pet-1-20-21', 'ps-119-105', 'heb-4-12'],
  },
  {
    id: 'sinfulness-of-man',
    name: 'The Sinfulness of Man',
    verseIds: [
      'rom-3-23',
      'rom-3-10-12',
      'isa-64-6',
      'jer-17-9',
      'gen-3-6-7',
      'rom-5-12',
    ],
  },
  {
    id: 'salvation-by-grace',
    name: 'Salvation by Grace Through Faith',
    verseIds: [
      'eph-2-8-9',
      'rom-6-23',
      'john-3-16',
      'titus-3-5',
      'acts-16-31',
      'rom-10-9-10',
    ],
  },
  {
    id: 'justification',
    name: 'Justification',
    verseIds: ['rom-5-1', 'rom-4-4-5', '2cor-5-21', 'gal-2-16'],
  },
  {
    id: 'atonement',
    name: 'The Atonement',
    verseIds: ['1pet-2-24', 'isa-53-5-6', 'rom-5-8', 'heb-9-22', '1john-2-2'],
  },
  {
    id: 'resurrection',
    name: 'The Resurrection',
    verseIds: ['1cor-15-3-4', '1cor-15-17', 'rom-4-25', 'rom-1-4'],
  },
  {
    id: 'exclusivity-of-christ',
    name: 'The Exclusivity of Christ',
    verseIds: ['john-14-6', 'acts-4-12', '1tim-2-5-6'],
  },
  {
    id: 'repentance-and-faith',
    name: 'Repentance and Faith',
    verseIds: ['mark-1-15', 'acts-2-38', 'acts-17-30', 'luke-13-3'],
  },
  {
    id: 'regeneration',
    name: 'Regeneration / New Birth',
    verseIds: ['john-3-3', '2cor-5-17', 'titus-3-5', 'ezek-36-26-27'],
  },
  {
    id: 'holy-spirit',
    name: 'The Holy Spirit',
    verseIds: ['john-16-13', 'rom-8-9', '1cor-3-16', 'gal-5-22-23'],
  },
  {
    id: 'sanctification',
    name: 'Sanctification',
    verseIds: ['1thess-4-3', 'phil-2-12-13', 'rom-8-29', 'john-17-17'],
  },
  {
    id: 'assurance',
    name: 'Assurance of Salvation',
    verseIds: ['john-10-27-29', 'rom-8-38-39', '1john-5-13', 'phil-1-6'],
  },
  {
    id: 'church',
    name: 'The Church',
    verseIds: ['matt-16-18', 'eph-1-22-23', 'acts-2-42', 'heb-10-24-25'],
  },
  {
    id: 'baptism-and-lords-supper',
    name: "Baptism and the Lord's Supper",
    verseIds: ['matt-28-19-20', '1cor-11-23-26', 'rom-6-3-4'],
  },
  {
    id: 'prayer',
    name: 'Prayer',
    verseIds: ['phil-4-6-7', 'matt-6-9-13', '1thess-5-17'],
  },
  {
    id: 'second-coming',
    name: 'The Second Coming',
    verseIds: ['john-14-3', 'acts-1-11', '1thess-4-16-17', 'rev-22-20'],
  },
  {
    id: 'judgment-and-hell',
    name: 'Judgment and Hell',
    verseIds: ['heb-9-27', 'rev-20-11-15', 'matt-25-46', '2thess-1-8-9'],
  },
  {
    id: 'heaven-and-eternal-life',
    name: 'Heaven and Eternal Life',
    verseIds: ['rev-21-3-4', 'john-17-3', '1cor-2-9'],
  },
  {
    id: 'christian-life',
    name: 'The Christian Life',
    verseIds: ['matt-22-37-39', 'rom-12-1-2', 'gal-2-20', 'mic-6-8'],
  },
  {
    id: 'anger-and-self-control',
    name: 'Anger & Self-Control',
    verseIds: ['prov-15-1', 'prov-29-11', 'james-1-19-20', 'eph-4-26-27'],
  },
  {
    id: 'anxiety-and-fear',
    name: 'Anxiety & Fear',
    verseIds: ['isa-41-10', 'ps-23-4', '2tim-1-7', 'matt-6-34'],
  },
  {
    id: 'contentment',
    name: 'Contentment',
    verseIds: ['prov-30-8-9', '1tim-6-6-8', 'heb-13-5'],
  },
  {
    id: 'diligence-and-work',
    name: 'Diligence & Work',
    verseIds: ['prov-6-6-8', 'col-3-23-24', 'prov-14-23', 'eccl-9-10'],
  },
  {
    id: 'discipline-and-training',
    name: 'Discipline & Training',
    verseIds: ['prov-12-1', 'heb-12-11', '1cor-9-27'],
  },
  {
    id: 'encouragement-of-others',
    name: 'Encouragement of Others',
    verseIds: ['1thess-5-11', 'prov-11-25', 'rom-15-1-2'],
  },
  {
    id: 'envy-and-comparison',
    name: 'Envy & Comparison',
    verseIds: ['prov-14-30', 'gal-6-4-5', 'james-3-14-16'],
  },
  {
    id: 'family-and-parenting',
    name: 'Family & Parenting',
    verseIds: ['prov-22-6', 'deut-6-6-7', 'eph-6-1-3', 'prov-17-6'],
  },
  {
    id: 'fear-of-the-lord',
    name: 'Fear of the Lord',
    verseIds: ['prov-1-7', 'prov-9-10', 'ps-111-10'],
  },
  {
    id: 'forgiveness-of-others',
    name: 'Forgiveness of Others',
    verseIds: ['matt-6-14-15', 'col-3-13', 'luke-17-3-4'],
  },
  {
    id: 'friendship',
    name: 'Friendship',
    verseIds: ['prov-17-17', 'prov-27-17', 'eccl-4-9-10'],
  },
  {
    id: 'generosity-and-giving',
    name: 'Generosity & Giving',
    verseIds: ['prov-19-17', '2cor-9-7', 'luke-6-38'],
  },
  {
    id: 'gossip-and-words',
    name: 'Gossip & Words',
    verseIds: ['prov-18-21', 'prov-20-19', 'eph-4-29'],
  },
  {
    id: 'guidance-and-decision-making',
    name: 'Guidance & Decision-Making',
    verseIds: ['prov-3-5-6', 'prov-11-14', 'james-1-5', 'ps-37-4-5'],
  },
  {
    id: 'humility',
    name: 'Humility',
    verseIds: ['prov-11-2', 'james-4-6', 'luke-14-11', 'rom-12-16'],
  },
  {
    id: 'integrity-and-honesty',
    name: 'Integrity & Honesty',
    verseIds: ['prov-10-9', 'prov-12-17', 'lev-19-11'],
  },
  {
    id: 'laziness',
    name: 'Laziness',
    verseIds: ['prov-13-4', 'prov-26-13-14', '2thess-3-10'],
  },
  {
    id: 'listening-and-learning',
    name: 'Listening & Learning',
    verseIds: ['prov-19-20', 'prov-15-22', 'james-1-22'],
  },
  {
    id: 'marriage',
    name: 'Marriage',
    verseIds: ['gen-2-24', 'eph-5-25', 'prov-31-10-11', '1cor-13-4-7'],
  },
  {
    id: 'money-and-wealth',
    name: 'Money & Wealth',
    verseIds: ['prov-22-7', '1tim-6-10', 'matt-6-24', 'prov-13-11'],
  },
  {
    id: 'patience',
    name: 'Patience',
    verseIds: ['rom-5-3-4', 'james-5-7-8', 'lam-3-25-26'],
  },
  {
    id: 'pride',
    name: 'Pride',
    verseIds: ['prov-16-18', 'prov-27-2', 'james-4-13-14'],
  },
  {
    id: 'seeking-god',
    name: 'Seeking God',
    verseIds: ['jer-29-13', 'matt-7-7-8', 'ps-27-4'],
  },
  {
    id: 'self-discipline-and-sobriety',
    name: 'Self-Discipline & Sobriety',
    verseIds: ['1pet-5-8', '1cor-6-19-20', 'titus-2-11-12'],
  },
  {
    id: 'serving-others',
    name: 'Serving Others',
    verseIds: ['mark-10-43-45', 'gal-6-2', 'matt-20-26-28'],
  },
  {
    id: 'speech-and-tongue',
    name: 'Speech & Tongue',
    verseIds: ['prov-21-23', 'prov-15-4', 'james-3-5-6'],
  },
  {
    id: 'suffering-and-perseverance',
    name: 'Suffering & Perseverance',
    verseIds: ['james-1-2-4', 'rom-8-18', '2cor-4-17-18'],
  },
  {
    id: 'trusting-god',
    name: 'Trusting God',
    verseIds: ['ps-46-10', 'isa-26-3', 'nah-1-7'],
  },
  {
    id: 'wisdom-generally',
    name: 'Wisdom Generally',
    verseIds: ['prov-4-7', 'prov-2-6', 'eccl-7-12'],
  },
  {
    id: 'youth-and-age',
    name: 'Youth & Age',
    verseIds: ['prov-20-29', 'eccl-12-1', '1tim-4-12'],
  },
  {
    id: 'miscellaneous-wisdom',
    name: 'Miscellaneous Wisdom',
    verseIds: ['prov-27-1', 'matt-7-12'],
  },
  {
    id: 'praise-for-who-god-is',
    name: 'Praise for Who God Is',
    verseIds: [
      'ps-8-1',
      'ps-19-1-2',
      'ps-95-3-5',
      'ps-145-3',
      'neh-9-6',
      'rev-4-11',
      'ps-104-1-2',
    ],
  },
  {
    id: 'praise-for-gods-holiness',
    name: "Praise for God's Holiness",
    verseIds: ['isa-6-3', 'rev-15-4', 'ps-99-3', '1sam-2-2'],
  },
  {
    id: 'praise-for-gods-greatness-and-power',
    name: "Praise for God's Greatness & Power",
    verseIds: [
      'ps-29-3-4',
      'ps-93-1-2',
      'job-26-7-8',
      'ps-147-4-5',
      'isa-40-26',
    ],
  },
  {
    id: 'praise-for-gods-faithfulness',
    name: "Praise for God's Faithfulness",
    verseIds: ['ps-89-1-2', 'lam-3-22-23', 'ps-100-5', 'deut-7-9', 'num-23-19'],
  },
  {
    id: 'praise-for-gods-love-and-mercy',
    name: "Praise for God's Love & Mercy",
    verseIds: [
      'ps-103-8-10',
      'ps-136-1',
      'rom-8-31-32',
      'eph-3-17-19',
      'zeph-3-17',
    ],
  },
  {
    id: 'praise-for-gods-word',
    name: "Praise for God's Word",
    verseIds: ['ps-19-7-8', 'ps-119-89', 'ps-119-129-130'],
  },
  {
    id: 'praise-for-creation',
    name: 'Praise for Creation',
    verseIds: ['ps-24-1-2', 'ps-33-6-7', 'isa-40-28', 'ps-65-9-10'],
  },
  {
    id: 'praise-for-salvation',
    name: 'Praise for Salvation',
    verseIds: ['ps-40-1-3', 'ps-107-1-2', 'isa-12-2', 'rev-19-1-2'],
  },
  {
    id: 'praise-in-all-circumstances',
    name: 'Praise in All Circumstances',
    verseIds: ['hab-3-17-18', 'job-1-21', 'ps-34-1', 'acts-16-25'],
  },
  {
    id: 'calls-to-worship',
    name: 'Calls to Worship',
    verseIds: [
      'ps-95-1-2',
      'ps-100-1-3',
      'ps-150-1-2',
      'ps-96-1-2',
      'ps-98-4-6',
      'rev-5-12',
    ],
  },
  {
    id: 'worship-with-the-whole-self',
    name: 'Worship with the Whole Self',
    verseIds: ['ps-63-1', 'ps-84-1-2', 'john-4-23-24', 'ps-51-17'],
  },
  {
    id: 'gods-glory',
    name: "God's Glory",
    verseIds: ['hab-2-14', 'isa-43-7', '1chr-16-24-25', 'ps-72-18-19'],
  },
  {
    id: 'gods-presence',
    name: "God's Presence",
    verseIds: ['ps-16-11', 'exod-33-14', 'ps-22-3', 'acts-17-27-28'],
  },
  {
    id: 'god-as-shepherd',
    name: 'God as Shepherd',
    verseIds: ['ps-23-1-3', 'isa-40-11', 'john-10-14-15'],
  },
  {
    id: 'god-as-refuge-and-fortress',
    name: 'God as Refuge & Fortress',
    verseIds: ['ps-46-1-3', 'ps-91-1-2', 'ps-62-1-2'],
  },
  {
    id: 'god-as-light',
    name: 'God as Light',
    verseIds: ['ps-27-1', 'mic-7-8', 'isa-60-19-20'],
  },
  {
    id: 'god-as-provider',
    name: 'God as Provider',
    verseIds: ['ps-145-15-16', 'matt-6-26', 'ps-34-10'],
  },
  {
    id: 'god-as-healer-and-comforter',
    name: 'God as Healer & Comforter',
    verseIds: ['ps-147-3', 'isa-61-1-2', '2cor-1-3-4', 'ps-34-18'],
  },
  {
    id: 'exaltation-of-christ',
    name: 'Exaltation of Christ',
    verseIds: ['phil-2-9-11', 'heb-1-8', 'ps-110-1', 'rev-5-9-10'],
  },
  {
    id: 'gods-eternal-reign',
    name: "God's Eternal Reign",
    verseIds: ['ps-145-13', 'dan-4-34-35', 'rev-11-15', '1chr-29-11-12'],
  },
  {
    id: 'thanksgiving',
    name: 'Thanksgiving',
    verseIds: ['ps-107-21-22', 'ps-118-28-29', 'col-3-15-16', 'ps-9-1-2'],
  },
  {
    id: 'awe-and-wonder',
    name: 'Awe & Wonder',
    verseIds: ['ps-139-14', 'ps-33-8-9', 'isa-55-8-9', 'rom-11-33-34'],
  },
  {
    id: 'songs-of-ascent-pilgrimage',
    name: 'Songs of Ascent / Pilgrimage',
    verseIds: ['ps-121-1-2', 'ps-122-1', 'ps-126-1-3'],
  },
  {
    id: 'personal-devotion-to-god',
    name: 'Personal Devotion to God',
    verseIds: ['ps-73-25-26', 'ps-42-1-2', 'ps-131-1-2'],
  },
  {
    id: 'doxologies',
    name: 'Doxologies',
    verseIds: ['rom-16-27', 'jude-24-25', 'eph-3-20-21'],
  },
]

const themesByVerseId = new Map<string, Theme[]>()

export function getTheme(id: string): Theme | undefined {
  return THEMES.find((t) => t.id === id)
}

export function themesForVerse(verseId: string): Theme[] {
  return themesByVerseId.get(verseId) ?? []
}

/** Cross-theme repeats are fine; duplicates within one theme are not. */
function validateThemes(): void {
  const bankIds = new Set(versesInOrder().map((v) => v.id))
  const themeIds = new Set<string>()

  for (const theme of THEMES) {
    if (themeIds.has(theme.id)) {
      throw new Error(`duplicate theme id "${theme.id}"`)
    }
    themeIds.add(theme.id)

    const seen = new Set<string>()
    for (const verseId of theme.verseIds) {
      if (!bankIds.has(verseId)) {
        throw new Error(`theme ${theme.id}: unknown verse id "${verseId}"`)
      }
      if (seen.has(verseId)) {
        throw new Error(`theme ${theme.id}: verse "${verseId}" listed twice`)
      }
      seen.add(verseId)
    }
  }
}

function indexThemes(): void {
  for (const theme of THEMES) {
    for (const verseId of theme.verseIds) {
      const list = themesByVerseId.get(verseId)
      if (list) list.push(theme)
      else themesByVerseId.set(verseId, [theme])
    }
  }
}

validateThemes()
indexThemes()
