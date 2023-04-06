<template>
  <div :class="['background', { interactive: isInteractive }]">
    <div class="controls flex justify-center space-x-5 p-2">
      <button @click="() => setInteractive(true)" :class="['control', { active: isInteractive }]">
        Interactive
      </button>
      <button @click="() => setInteractive(false)" :class="['control', { active: !isInteractive }]">
        Paper
      </button>
    </div>
    <div
      @mouseover="() => setPaperHovering(true)"
      @mouseleave="() => setPaperHovering(false)"
      :class="['paper', { hover: isPaperHovering }]"
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
          <div>A computer is only as good as how easy it is to use it; I make that happen.</div>
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
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Flow</li>
            <li>ES6+</li>
            <li>Vue</li>
            <li>React</li>
            <li>Redux</li>
            <li>jQuery</li>
            <li>SASS</li>
            <li>SCSS</li>
            <li>jest</li>
            <li class="de-emphasized">GraphQL</li>
            <li class="de-emphasized">RxJS</li>
            <li class="de-emphasized">Google Web Toolkit(GWT)</li>
            <li class="de-emphasized">PHP</li>
            <li class="de-emphasized">Hack</li>
            <li class="de-emphasized">Java</li>
            <li class="de-emphasized">NodeJS</li>
            <li class="de-emphasized">MySQL</li>
          </ul>
        </div>

        <div class="section">
          <h2>Concepts / Paradigms</h2>
          <ul class="slash-list">
            <li>OOP</li>
            <li>Responsive design</li>
            <li>SPA</li>
            <li>Flux pattern</li>
            <li>Hooks</li>
            <li>Algorithm</li>
            <li>Data structure</li>
            <li>Functional programming</li>
            <li>User interface (UI)</li>
            <li>User experience (UX)</li>
            <li>Internationalization (i18n)</li>
            <li>REST API</li>
            <li>Test driven design (TDD)</li>
            <li>Unit testing</li>
            <li>E2E testing</li>
          </ul>
        </div>

        <div class="section">
          <h2>Tools</h2>
          <ul class="slash-list">
            <li>npm</li>
            <li>webpack</li>
            <li>Firebase</li>
            <li>git</li>
            <li>Vue-related tools</li>
            <li>mobile-dev tools</li>
          </ul>
        </div>
      </div>

      <div class="col-2">
        <h2>Experience</h2>

        <div class="section">
          <div class="h3-row">
            <h3>Rippling</h3>
            <span class="title">Senior Software Engineer / 2022.10 - 2023.04</span>
          </div>
          <div class="desc">Implement features and fix bugs on web and mobile</div>
          <ul class="job-desc-list">
            <li>
              Launch a campaign to <strong>train other engineers</strong> on correct way of
              implementing i18n
            </li>
            <li>
              <strong>Rearchitected</strong> and <strong>improved type</strong> across mobile and
              web to significantly <strong>reduce bugs</strong> and
              <strong>enhance readability</strong>, <strong>testability</strong>, and
              <strong>portability</strong>
            </li>
          </ul>
        </div>

        <div class="section">
          <div class="h3-row">
            <h3>Meta: Web3 Services</h3>
            <span class="title">Software Engineer / 2021.10 – 2022.10</span>
          </div>
          <div class="desc">
            Build the necessary tools as the company transitions from Web 2 to Web 3
          </div>
          <ul class="job-desc-list">
            <li>
              Create an <strong>internal tool</strong> similar to <strong>OpenSea.io</strong> that
              enabled users to view information on NFT and blockchain addresses
            </li>
            <li>
              Actively engage wide range of teams to <strong>scope out their needs</strong> and
              <strong>prioritize features</strong> that had the largest
              <strong>impact to the business</strong>
            </li>
            <li>
              <strong>Write GraphQL</strong> queries that enables searching for NFTs by different
              attributes
            </li>
            <li>
              <strong>Rearchitect</strong> the internal tool as more teams added features and tools
              onto it
            </li>
            <li>
              <strong>Teach and guide interns</strong> through their technical and career journey
            </li>
          </ul>
        </div>

        <div class="section">
          <div class="h3-row">
            <h3>Amazon Web Services: EC2 Networking</h3>
            <span class="title">Software Engineer / 2020.03 – 2021.10</span>
          </div>
          <div class="desc">
            Develop the console and the infrastructure behind it for the Elastic Load Balancing org
          </div>
          <ul class="job-desc-list">
            <li>
              <strong>Rebuild the console</strong> written in GWT with internally developed React
              component library
            </li>
            <li>
              <strong>Use RxJS and Redux</strong> to manage the internal state of the app and to
              communicate with the backend
            </li>
            <li>
              Write and maintain <strong>end-to-end (E2E) tests</strong> as well as component tests
            </li>
            <li>
              <strong>Respond to inquiries and requests</strong> from both internal and external
              customers, including emergencies
            </li>
            <li>
              Monitor and <strong>maintain the CI/CD pipeline</strong> for smooth worldwide
              deployment
            </li>
            <li>
              Write and improve various internal docs that reduced onboarding time from
              <strong>6 weeks to 1 week</strong>
            </li>
          </ul>
        </div>

        <div class="section">
          <div class="h3-row">
            <h3>Pilot.com</h3>
            <span class="title">Software Engineer / 2019.03 – 2020.01</span>
          </div>
          <div class="desc">Develop an app for the internal bookkeepers</div>
          <ul class="job-desc-list">
            <li>
              <strong>Overhaul the internal dashboard</strong> that displays thousands of customer
              statuses with details about their work completion, assignee, and other information
            </li>
            <li>
              <strong>Develop / test pixel-perfect UI</strong> based on design using Vue / SASS /
              Jest / Vue test util
            </li>
            <li>
              <strong>Communicate with stakeholders</strong> such as designers and Product
              Specialists to improve existing UI and initiate new projects
            </li>
            <li><strong>Address bugs and comments</strong> with short turnarounds</li>
            <li>
              <strong>Optimize and modernize codebase</strong> with the newest standard of
              HTML/JavaScript/CSS and adding greater test coverage
            </li>
          </ul>
        </div>

        <div class="section">
          <div class="h3-row">
            <h3>MathTestNinja</h3>
            <span class="title">Full Stack Developer / 2018.12 – Present </span>
          </div>
          <div class="desc">
            It lets users practice infinite number of math problems for standardized math tests.
          </div>
          <ul class="job-desc-list">
            <li>
              <strong>Planned</strong>, <strong>designed</strong>, and <strong>coded</strong> it
              from scratch, based on 9 years of teaching experience
            </li>
            <li>
              Built as a <strong>Single Page Application</strong>, and uses
              <strong>Firestore</strong> for backend needs
            </li>
            <li>
              <strong>Uses third party JS library and API</strong> from Stripe to securely process
              payment
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      @mouseover="() => setPaperHovering(true)"
      @mouseleave="() => setPaperHovering(false)"
      :class="['paper', 'paper-bg', { hover: isPaperHovering }]"
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
import { ref } from 'vue'

const isInteractive = ref(false)
const isPaperHovering = ref(false)

setTimeout(() => {
  isInteractive.value = true
}, 3_000)

const setInteractive = (val: boolean) => (isInteractive.value = val)
const setPaperHovering = (val: boolean) => (isPaperHovering.value = val)
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
  transition: margin 2s, padding 2s, width 2s, height 2s, grid-template-columns 2s, background-color 0.2s

.col2
  transition: all 2s

.section
  position: relative
  z-index: 1
  margin-bottom: 0.125in
  line-height: 1.7
  transition: width 2s, all 0.2s
.main
  margin-top: 0.125in
  height: 2.25in
  top: -0.125in
  transition: all 0.2s
  &:after
    content: ''
    display: block
    position: absolute
    width: calc(100% + 0.25in)
    height: calc(100% + 0.25in)
    left: -0.125in
    top: -0.125in
    background-color: var(--jko-blue)
    transition: background-color 0.2s
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
  transition: all 2s

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
  transition: max-height 2s
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
