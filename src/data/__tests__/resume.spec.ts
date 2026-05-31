import { describe, it, expect } from 'vitest'
import { z } from 'zod'
import resumeJson from '../resume.json'

const bulletPointSchema = z.object({
  bold: z.string().optional(),
  text: z.string()
})

const contactItemSchema = z.object({
  text: z.string(),
  href: z.string()
})

const skillItemSchema = z.object({
  id: z.string(),
  name: z.string()
})

const skillGroupSchema = z.object({
  title: z.string(),
  items: z.array(skillItemSchema)
})

const educationInfoSchema = z.object({
  school: z.string(),
  degree: z.string(),
  notes: z.string().optional(),
  detail: z.string().optional()
})

const experienceItemSchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  subtitle: z.string().optional(),
  period: z.string().optional(),
  desc: z.string().optional(),
  bullets: z.array(bulletPointSchema),
  skills: z.array(z.string()).optional(),
  hidden: z.boolean().optional()
})

const projectItemSchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  subtitle: z.string().optional(),
  period: z.string().optional(),
  desc: z.string(),
  bullets: z.array(bulletPointSchema),
  skills: z.array(z.string()).optional(),
  hidden: z.boolean().optional()
})

const resumeDataSchema = z.object({
  name: z.string(),
  role: z.string(),
  contact: z.array(contactItemSchema),
  introduction: z.string(),
  education: educationInfoSchema,
  skills: z.object({
    languages: skillGroupSchema,
    paradigms: skillGroupSchema,
    tools: skillGroupSchema
  }),
  experiences: z.array(experienceItemSchema),
  projects: z.array(projectItemSchema),
  miscellaneous: z.array(z.string())
})

describe('Resume JSON Validation', () => {
  it('should conform to the ResumeData schema', () => {
    const result = resumeDataSchema.safeParse(resumeJson)
    if (!result.success) {
      console.error(JSON.stringify(result.error.format(), null, 2))
    }
    expect(result.success).toBe(true)
  })
})
