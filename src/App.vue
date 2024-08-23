<template>
  <div :class="['background', { interactive: isInteractive }]">
    <div class="controls flex justify-center space-x-5 p-2">
      <button @click="() => setInteractive(false)" :class="['control', { active: !isInteractive }]">
        Paper
      </button>
      <button @click="() => setInteractive(true)" :class="['control', { active: isInteractive }]">
        Interactive
      </button>
    </div>
    <!-- 
    https://chatgpt.com/c/4c764e13-76c7-4042-a049-8a5bbf5aa01a
    has a lot of the writings for what went into this version of the resume.
    -->
    <div
      @mouseover="() => setPaperHovering(true)"
      @mouseleave="() => setPaperHovering(false)"
      :class="['paper', { hover: isHoveringOverPaper }]"
    >
      <div class="col-1">
        <div class="section main">
          <h1 class="name">J Ko</h1>
          <h2>Software Developer</h2>
          <ul class="contact-list">
            <li>
              <a target="_blank" href="https://j-ko.dev">
                <!-- <img src="" alt="" class="contact-ion" /> -->
                J-Ko.dev
              </a>
            </li>
            <li>
              <a target="_blank" href="mailto:206jko@gmail.com">
                <!-- <img src="" alt="" class="contact-ion" /> -->
                206jko@gmail.com
              </a>
            </li>
            <li>
              <a target="_blank" href="tel:+14252205899">
                <!-- <img src="" alt="" class="contact-ion" /> -->
                +1.425.220.5899
              </a>
            </li>
            <li>
              <a target="_blank" href="https://Github.com/jko206">
                <!-- <img src="" alt="" class="contact-ion" /> -->
                Github.com/jko206
              </a>
            </li>
            <li>
              <a target="_blank" href="https://LinkedIn.com/in/206jko">
                <!-- <img src="" alt="" class="contact-ion" /> -->
                LinkedIn.com/in/206jko
              </a>
            </li>
          </ul>
        </div>

        <div class="section">
          <h2>Introduction</h2>
          <div>Connecting humans and computers</div>
        </div>

        <div class="section">
          <h2>Education</h2>
          <h3>U of Washington, Seattle</h3>
          <ul class="plain-list">
            <li class="flex justify-between">
              <span>Mathematics B.S.</span>
              <span class="small-text">(discontinued)</span>
            </li>
            <li>Computer science focused</li>
          </ul>
        </div>

        <div class="section">
          <h2>Language / Frameworks</h2>
          <ul class="slash-list">
            <li :class="{ active: highlightedSkill.includes('js') }">JavaScript</li>
            <li :class="{ active: highlightedSkill.includes('ts') }">TypeScript</li>
            <li :class="{ active: highlightedSkill.includes('react') }">React</li>
            <li :class="{ active: highlightedSkill.includes('node') }">NodeJS</li>
            <li :class="{ active: highlightedSkill.includes('css') }">CSS</li>
            <li :class="{ active: highlightedSkill.includes('html') }">HTML</li>
            <li :class="{ active: highlightedSkill.includes('gql') }">GraphQL</li>
            <li :class="{ active: highlightedSkill.includes('redux') }">Redux</li>
            <li :class="{ active: highlightedSkill.includes('tail') }">Tailwind CSS</li>
            <li :class="{ active: highlightedSkill.includes('sass') }">SASS</li>
            <li :class="{ active: highlightedSkill.includes('scss') }">SCSS</li>
            <li :class="{ active: highlightedSkill.includes('es6') }">ES6+</li>
            <li :class="{ active: highlightedSkill.includes('es6') }">AWS CDK</li>
            <li :class="{ active: highlightedSkill.includes('es6') }">Cypress</li>
            <li :class="{ active: highlightedSkill.includes('es6') }">Playwright</li>
            <li :class="{ active: highlightedSkill.includes('vue') }">Vue</li>
            <li :class="{ active: highlightedSkill.includes('java') }">Java</li>
            <li :class="{ active: highlightedSkill.includes('php') }">PHP</li>
            <li :class="{ active: highlightedSkill.includes('mysql') }">MySQL</li>
            <li :class="{ active: highlightedSkill.includes('flow') }">Flow</li>
            <li :class="{ active: highlightedSkill.includes('hack') }">Hack</li>
            <li :class="{ active: highlightedSkill.includes('jest') }">Jest</li>
            <li :class="{ active: highlightedSkill.includes('jest') }">Vitest</li>
          </ul>
        </div>

        <div class="section">
          <h2>Concepts / Paradigms</h2>
          <ul class="slash-list">
            <li>Functional programming</li>
            <li>Event-driven architecture</li>
            <li>Cloud computing</li>
            <li>Single/Multi Page Application</li>
            <li>Object oriented programming (OOP)</li>
            <li>Responsive design</li>
            <li>Test-driven development</li>
            <li>React hooks</li>
            <li>Vue composition</li>
            <li>Algorithms</li>
            <li>Data structures</li>
            <li>User interface (UI)</li>
            <li>User experience (UX)</li>
            <li>Internationalization (i18n)</li>
            <li>Testing (unit / integration / E2E)</li>
            <li>Continuous integration / continuous deployment (CI/CD)</li>
          </ul>
        </div>

        <div class="section">
          <h2>Tools</h2>
          <ul class="slash-list">
            <li :class="{ active: highlightedSkill.includes('npm') }">npm</li>
            <li :class="{ active: highlightedSkill.includes('webpack') }">vite</li>
            <li :class="{ active: highlightedSkill.includes('git') }">git</li>
            <li :class="{ active: highlightedSkill.includes('vue-tools') }">Vue dev tools</li>
            <li :class="{ active: highlightedSkill.includes('vue-tools') }">React dev tools</li>
            <li :class="{ active: highlightedSkill.includes('vue-tools') }">Chrome Lighthouse</li>
            <li :class="{ active: highlightedSkill.includes('copilot') }">GitHub Copilot</li>
            <li :class="{ active: highlightedSkill.includes('metro') }">Metro</li>
            <li :class="{ active: highlightedSkill.includes('vs-code') }">VS Code</li>
          </ul>
        </div>
      </div>

      <div class="col-2">
        <h2>Experience</h2>

        <div
          class="section"
          @mouseenter="() => (highlightedSkill = skillsUsed.amazon2)"
          @mouseleave="() => (highlightedSkill = [])"
        >
          <div class="h3-row">
            <h3>Amazon: Corporate Projects Team</h3>
            <span class="title">Software Engineer / 2024.02 – Present </span>
          </div>
          <div class="desc">
            Maintain and enhance the order intake app for an internal division; collaborate with
            stakeholders to deliver tailored solutions that improve operational efficiency and user
            experience.
          </div>
          <ul class="job-desc-list">
            <li>
              <strong>Develop and optimize file upload</strong> by enabling users to validate and
              assess 3D files while managing parallel async operations, resolving performance issues
              through optimized library usage, reducing load times, and enhancing user experience
              during complex file uploads.
            </li>
            <li>
              <strong>Refactor frontend components</strong> by implementing the reducer pattern,
              improving code readability, maintainability, and increasing test coverage from 80% to
              over 95%.
            </li>
            <li>
              <strong>Manage timelines and collaborate</strong> in a dynamic environment by
              initiating early design planning, navigating ambiguous project requirements,
              coordinating with cross-functional teams, and documenting decisions to ensure smooth
              and successful project execution.
            </li>
            <li>
              <strong>Leverage a robust tech stack</strong> including React, TypeScript, AWS CDK,
              AppSync, and Cognito to build and maintain a scalable, secure, and high-performance
              order intake application, seamlessly integrating with event-driven microservices
              architecture.
            </li>
          </ul>
        </div>

        <div
          class="section"
          @mouseenter="() => (highlightedSkill = skillsUsed.rippling)"
          @mouseleave="() => (highlightedSkill = [])"
        >
          <div class="h3-row">
            <h3>Rippling</h3>
            <span class="title">Senior Software Engineer / 2022.10 - 2023.04</span>
          </div>
          <div class="desc">
            Implement features and fix bugs on web and mobile using React and React Native
          </div>
          <ul class="job-desc-list">
            <li>
              <strong>Rearchitect</strong> Refactored the common logic from web and mobile into
              React hooks that can be used across both platforms, and improved TypeScript
              definitions
            </li>
            <li>
              <strong>Improve testability</strong> Rewrote critical functions to be testable and
              more readable
            </li>
            <li>
              <strong>Train others</strong> Launched a campaign on correctly implementing i18n and
              taught others TypeScript and its importance
            </li>
            <!-- <li>
              <strong>Improve code quality</strong> Rewrote critical functions to be testable and
              more readable; Used Flipper and other internal tools to debug and fix bugs
            </li>
            <li>
              <strong>Build UI/UX</strong> Implemented i18n; used internal UI library to build and
              improve features
            </li> -->
          </ul>
        </div>

        <div
          class="section"
          @mouseenter="() => (highlightedSkill = skillsUsed.meta)"
          @mouseleave="() => (highlightedSkill = [])"
        >
          <div class="h3-row">
            <h3>Meta: Web3 Services</h3>
            <span class="title">Software Engineer / 2021.10 – 2022.10</span>
          </div>
          <div class="desc">
            Build the internal platform as the company transitions from Web 2 to Web 3 using React,
            Flow, GraphQL and HackLang.
          </div>
          <ul class="job-desc-list">
            <li>
              <strong>Engage and plan</strong> Actively engaged other teams to scope out needs and
              prioritize features with largest business impact
            </li>
            <li>
              <strong>Build platform</strong> Built an internal tool for querying and displaying
              NFTs
            </li>
            <li>
              <strong>Rearchitect</strong> Transformed a basic querying tool into a platform upon
              which others can build their own tools
            </li>
            <li>
              <strong>Mentor interns</strong> Taught interns technical skills, as well as career
              planning and growth
            </li>
          </ul>
        </div>

        <div
          class="section"
          @mouseenter="() => (highlightedSkill = skillsUsed.amazon)"
          @mouseleave="() => (highlightedSkill = [])"
        >
          <div class="h3-row">
            <h3>Amazon Web Services: EC2 Networking</h3>
            <span class="title">Software Engineer / 2020.03 – 2021.10</span>
          </div>
          <div class="desc">
            Develop the
            <a
              href="https://us-east-1.console.aws.amazon.com/ec2/home?region=us-east-1#LoadBalancers:"
              target="_blank"
              class="underline text-blue-500"
              >console</a
            >
            and the infrastructure behind it for the Elastic Load Balancing org
          </div>
          <ul class="job-desc-list">
            <li>
              <strong>Rebuild console</strong> Rewrote console previously written in GWT and Angular
              with internal React library, RxJS, Redux, and TypeScript.
            </li>
            <li>
              <strong>Improve testing</strong> Wrote unit, integration, and E2E to tests to maintain
              bug-free service
            </li>
            <li>
              <strong>Listen and engage</strong> Read internal and external customers' feedback to
              plan and prioritize features, and catch UI/UX issues not caught by tests
            </li>
            <li>
              <strong>Manage deployment</strong> Monitored and maintained CI/CD pipeline for smooth
              worldwide deployment
            </li>
            <li>
              <strong>Improve onboarding</strong> Reduced onboarding time from 6 weeks to 1 week at
              the beginning of the pandemic
            </li>
          </ul>
        </div>

        <div
          class="section hidden"
          @mouseenter="() => (highlightedSkill = skillsUsed.pilot)"
          @mouseleave="() => (highlightedSkill = [])"
        >
          <div class="h3-row">
            <h3>Pilot.com</h3>
            <span class="title">Software Engineer / 2019.03 – 2020.01</span>
          </div>
          <div class="desc">Develop an app for the internal bookkeepers</div>
          <ul class="job-desc-list">
            <li>
              <strong>Redo customer dashboard</strong> Revamped the page that displays all customer
              statuses with details about their work completion, assignee, etc.
            </li>
            <li>
              <strong>Build global component</strong> Built a component that can be used across the
              app to toggle the status of a customer
            </li>
            <li>
              <strong>Communicate for quick result</strong> Owing to startup nature of the company,
              talked directly with designers, PMs, devs, and other employees to quickly implement
              ideas, fix bugs, etc.
            </li>
            <li>
              <strong>Optimize/modernize codebase</strong> Implemented newest standard of
              HTML/JavaScript/CSS and improved test coverage
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      @mouseover="() => setPaperHovering(true)"
      @mouseleave="() => setPaperHovering(false)"
      :class="['paper', { hover: isHoveringOverPaper }]"
    >
      <div class="col-1">
        <div class="section">
          <h2>Miscellaneous</h2>
          <ul class="job-desc-list">
            <li>
              Places in the top percentiles in various JavaScript assessments, such as LinkedIn,
              TopTal, TripleByte, etc.
            </li>
            <li>
              I write self-documenting code. Generally speaking, if I have to write comments, then
              there's probably a better way to write the code.
            </li>
            <li>
              Having been a private tutor for 9 years, I care deeply about how and why people
              encounter hindrance in accessing information. This care has been translated into my
              passion for creating intuitive UI/UX.
            </li>
          </ul>
        </div>
      </div>
      <div class="col-2">
        <h2 class="margin-top">Projects</h2>

        <div
          class="section"
          @mouseenter="() => (highlightedSkill = skillsUsed.mtn)"
          @mouseleave="() => (highlightedSkill = [])"
        >
          <div class="h3-row">
            <h3>MathTestNinja</h3>
            <span class="title">Full Stack Developer / 2023.06 – 2024.02 </span>
          </div>
          <div class="desc">
            It lets users practice infinite number of math problems for standardized math tests.
          </div>
          <ul class="job-desc-list">
            <li>
              <strong>Build from scratch</strong> Planned, designed, and coded it based on 9 years
              of teaching experience
            </li>
            <li>
              <strong> Infrastructure</strong> Built with Firebase for authentication, database, and
              hosting
            </li>
            <li>
              <strong>Build mailing list</strong> Built pipeline with Google Cloud Functions and
              Mailchimp
            </li>
            <li>
              <strong>Process payments</strong>
              Integrate Stripe for subscription payment processing.
            </li>
          </ul>
        </div>
        <div class="section">
          <h3>Arraze</h3>
          <div class="desc">A JavaScript utility library for array manipulation.</div>
          <ul class="job-desc-list">
            <li>Designed to be intuitive, light, tested, and well documented.</li>
            <li>
              Provides functionalities such as sort(), filter(), shuffle(), and createNumbered()
              that are often used by developers, but implemented each time they're used.
            </li>
            <li>Written in TypeScript for optimal IDE integration and type safety</li>
          </ul>
        </div>

        <div class="section">
          <h3>DirTree</h3>
          <div class="desc">An app that prints folder structures to be used in dev doc.</div>
          <ul class="job-desc-list">
            <li>Develop custom algorithm to display directory structure</li>
            <li>Develop intuitive UI/UX to be used with keyboard</li>
            <li>Collect user feedback and metrics with Firestore</li>
          </ul>
        </div>

        <div class="section">
          <h3>PrecisionJS</h3>
          <div class="desc">
            A JavaScript math library that allows high level math with infinite precision.
          </div>
          <ul class="job-desc-list">
            <li>Uses array or BigInt calculate arbitrarily large numbers with precision</li>
            <li>Parses and calculates repeating decimals and fractions</li>
            <li>
              Uses series, implemented in recursion or while loop, to run trigonometric functions
              and higher-level functions with practically infinite precision
            </li>
            <li>Being re-written in TypeScript</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'

const isInteractive = ref(false)
const isHoveringOverPaper = ref(false)
const highlightedSkill = ref<string[]>([])

setTimeout(() => {
  isInteractive.value = true
}, 3_000)

const setInteractive = (val: boolean) => (isInteractive.value = val)
const setPaperHovering = (val: boolean) => (isHoveringOverPaper.value = val)

const skillsUsed = {
  rippling: [
    'ts',
    'react',
    'jest',
    'hooks',
    'flux',
    'ui',
    'ux',
    'e2e',
    'unit',
    'rest',
    'i18n',
    'mobile'
  ],
  meta: ['flow', 'react', 'gql', 'ui', 'ux', 'hooks', 'e2e', 'unit', 'hack', 'php'],
  amazon: [
    'ts',
    'react',
    'jest',
    'hooks',
    'redux',
    'rxjs',
    'ui',
    'ux',
    'e2e',
    'unit',
    'rest',
    'i18n',
    'gwt'
  ],
  pilot: ['vue', 'scss', 'sass', 'html', 'spa', 'vue-tools', 'e2e', 'jest', 'unit', 'resp'],
  mtn: ['vue', 'vue-tools', 'ui', 'ux', 'spa', 'scss', 'tail'],
  amazon2: [
    'ts',
    'react',
    'jest',
    'hooks',
    'redux',
    'rxjs',
    'ui',
    'ux',
    'e2e',
    'unit',
    'rest',
    'i18n',
    'eda'
  ]
}
</script>
<style lang="sass">
body
  background-color: rgb(82, 86, 89) !important
  font-size: 14px
  --jko-blue: rgb(220 230 242)
  --jko-blue-muted: rgb(106 128 154)
  --jko-highlight: rgb(43 83 132)
</style>
<style scoped lang="sass">

h1
  font-size: 40px
h2
  font-size: 18px
h3
  font-size: 16px
.small-text
  font-size: 9px
  color: gray
.section
  font-size: 12px
.paper
  background: white
  width:  8.5in
  height: 11in
  margin: 80px auto
  padding: 0.25in
  display: grid
  grid-template-columns: 2.25in 5.5in
  grid-gap: .25in
  line-height: 1.25
  transition: margin 1s, padding 1s, width 1s, height 1s, grid-template-columns 1s, background-color 0.1s

.col2
  transition: all 1s

.section
  position: relative
  z-index: 1
  margin-bottom: 0.125in
  line-height: 1.7
  transition: width 1s, all 0.1s
.main
  margin-top: 0.125in
  height: 2.25in
  top: -0.125in
  transition: all 0.1s
  &:after
    content: ''
    display: block
    position: absolute
    width: calc(100% + 0.25in)
    height: calc(100% + 0.25in)
    left: -0.125in
    top: -0.125in
    background-color: var(--jko-blue)
    transition: background-color 0.1s
    z-index: -1
.contact-list
  margin-top: 13px
  a
    color: var(--jko-highlight)
    display: inline-block
    border-bottom: 1px solid rgb(141 173 212)
    &:hover
      border-bottom: 1px solid var(--jko-highlight)

.slash-list li
  display: inline
  word-break: break-word
  &:first-child:before
    display: inline
  &:not(:first-child):before
    content: ' / '
    display: inline
  &.de-emphasized
    color: gray
    &:before
      color: black

.col-1
  top: 0
  transition: all 1s

.h3-row
  display: flex
  justify-content: space-between
  align-items: center
.title
  color: var(--jko-highlight)
.desc
  font-style: italic
.job-desc-list
  list-style-type: square
  padding-left: 20px

@media print
  .paper
    margin: 0
  .background
    transform: scale(1)
  .main:after
    background-color: var(--jko-blue)
    print-color-adjust: exact
  .controls
    display: none

.controls
  transition: max-height 1s
  position: absolute
  top: 0
  height: 50px
  background: darkgray
  width: 100%

  .control
    @apply py-1 px-3 rounded-md bg-white
    &.active
      @apply bg-blue-500 text-white

.interactive
  .paper:nth-child(2)
    margin: 50px auto 0
    padding-bottom: 0
    padding-top: 0.25in
  .paper
    margin: 0 auto
    height: auto
    padding-top: 0
    width: 1000px
    grid-template-columns: 1fr 2fr
    &.hover
      background: gray
      .main:after
        background: var(--jko-blue-muted)
      .main:hover:after
        background: var(--jko-blue)
      li.active
        color: white
        &:before
          color: black

  .paper:nth-child(3) .col-1
    top: -88px
    position: relative
  .col-2
    .section:hover
      @apply p-3 rounded-lg
      transform: scale(1.05)
      background: white
  .hover
    .de-emphasized
      color: black
</style>
