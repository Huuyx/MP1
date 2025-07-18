export * from './projects'
export * from './education'


// personal info
export const name = 'Huuyx'
export const headline = 'Undergraduate at NUFE.'
export const introduction =
  "My name is Yanhao Hu, and I have been studying big data management and application in NUFE since 2024."
export const email = 'huuyx06@gmail.com'
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
