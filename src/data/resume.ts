export interface BulletPoint {
  bold?: string
  text: string
}

export interface ContactItem {
  text: string
  href: string
}

export interface SkillItem {
  id: string
  name: string
}

export interface SkillGroup {
  title: string
  items: SkillItem[]
}

export interface EducationInfo {
  school: string
  degree: string
  notes?: string
  detail?: string
}

export interface ExperienceItem {
  id?: string
  title: string
  subtitle?: string
  period?: string
  desc?: string
  bullets: BulletPoint[]
  skills?: string[]
  hidden?: boolean
}

export interface ProjectItem {
  id?: string
  title: string
  subtitle?: string
  period?: string
  desc: string
  bullets: BulletPoint[]
  skills?: string[]
  hidden?: boolean
}

export interface ResumeData {
  name: string
  role: string
  contact: ContactItem[]
  introduction: string
  education: EducationInfo
  skills: {
    languages: SkillGroup
    paradigms: SkillGroup
    tools: SkillGroup
  }
  experiences: ExperienceItem[]
  projects: ProjectItem[]
  miscellaneous: string[]
}

import resumeDataJson from './resume.json'

export const resumeData: ResumeData = resumeDataJson
