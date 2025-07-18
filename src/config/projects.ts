// Types
export type ProjectItemType = {
  name: string
  description: string
  tags: string[]
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = "Awards & Honors"
export const awardsIntro = "Recognition for academic and professional achievements."

export const awards: Array<ActivityItemType> = [
  {
    name: 'First Prize for Academic Excellence (School Level)',
    description: '',
    date: '2025',
    location: 'NUFE',
  },
  {
    name: 'First Prize in National Collegiate Statistics Modeling Contest (Provincial Level)',
    description: '',
    date: '2025',
    location: 'NUFE',
  },
  {
    name: 'Second Prize of Jiangsu Mathematics Competition',
    description: '',
    date: '2025',
    location: 'NUFE',
  },
  {
    name: 'Third Prize in Python Category of Blue Bridge Cup (Provincial Level)',
    description: '',
    date: '2025',
    location: 'NUFE',
  },
  {
    name: 'Third Prize in May Day Mathematical Modeling Competition',
    description: '',
    date: '2025',
    location: 'NUFE',
  },
]

// Research & Projects
export const projectHeadLine = "Research & Projects"
export const projectIntro = "Academic research and technical projects."

export const projects: Array<ProjectItemType> = [
  {
    name: 'Training Program of Innovation and Entrepreneurship For Undergraduates',
    description: 'Scientific research literature-assisted AI large model',
    tags: ['AI', 'LLM', 'ResearchTool']
  },
]

// Hobbies & Volunteer
export const activitiesHeadLine = "Hobbies & Volunteer"
export const activitiesIntro = "Personal interests and community contributions."

export const activities: Array<ActivityItemType> = [
  {
    name: 'Machine Learning',
    description:
      'A branch of artificial intelligence and computer science',
    date: '2025-03',
    location: 'NUFE',
  },
  {
    name: 'Linux',
    description:
      'A open-source software operating systems.',
    date: '2025-07',
    location: 'Shanghai',
  },
  {
    name: 'Data Analysis',
    description:
      'Strive to solve real-life data analysis problems using numpy, pandas library, R, SQL, and machine learning.',
    date: '2025-07',
    location: 'Shanghai',
  },
  {
    name: 'LLM',
    description:
      'A deep interest in building large language models and the algorithms',
    date: '2025-07',
    location: 'Shanghai',
  },
]
