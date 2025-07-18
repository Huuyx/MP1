export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Huuyx'
export const headline = 'Undergraduate at NUFE.'
export const introduction =
<<<<<<< HEAD
  "My name is Yanhao Hu, and I have been studying big data management and application in NUFE since 2024."
export const email = 'huuyx06@gmail.com'
=======
  "Coucou Les Amis! My name is Derek Hu. I'm from Hubei and an alumnus of BUPT, UChicago, and Tsinghua. I’ve been teaching Computer Science at SCLS since 2020."
export const email = 'tong.hu@scls-sh.org'
>>>>>>> 7e76e995c3eb5e21461100fff593f85e82560c8b
export const githubUsername = 'Huuyx'

// about page
export const aboutMeHeadline = 'Who Are You and Why Should I Care?'
export const aboutParagraphs = [
  "My name is Yanhao Hu, and I have been studying big data management and application in NUFE since 2024.",
  'Currently I am studying computer-related courses, and I am interested in the application of data science.',
  "I started this blog to share the insights I learn every day. Most blogs focus on my routine learning process.",
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I've written something about plans, projects, programming and data science."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Github',
    icon: 'github',
    href: 'https://github.com/Huuyx',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
