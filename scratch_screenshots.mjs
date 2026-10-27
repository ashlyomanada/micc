import { execSync } from 'child_process'
import path from 'path'

const CHROME = '"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"'
const OUT_DIR = '/Users/ccci/.gemini/antigravity-ide/brain/1418d469-e751-41d9-8eb7-112572938f89/screenshots'

const sizes = [
  { name: '375', width: 375, height: 812 },
  { name: '768', width: 768, height: 1024 },
  { name: '1280', width: 1280, height: 800 },
  { name: '1920', width: 1920, height: 1080 }
]

const localPages = [
  { name: 'home', path: '' },
  { name: 'locations', path: 'locations' },
  { name: 'beliefs', path: 'beliefs' },
  { name: 'leadership', path: 'leadership' },
  { name: 'visit_church', path: 'visit-church' }
]

console.log('Capturing local site screenshots...')
for (const page of localPages) {
  for (const size of sizes) {
    const url = `http://localhost:3000/${page.path}`
    const outFile = path.join(OUT_DIR, `local_${page.name}_${size.name}.png`)
    const cmd = `${CHROME} --headless=new --disable-gpu --screenshot="${outFile}" --window-size=${size.width},${size.height} --hide-scrollbars "${url}" 2>/dev/null`
    try {
      execSync(cmd, { timeout: 10000 })
      console.log(`Captured local_${page.name}_${size.name}.png`)
    } catch (e) {
      console.error(`Failed ${page.name} @ ${size.name}:`, e.message)
    }
  }
}

console.log('Capturing reference site screenshots...')
for (const size of sizes) {
  const url = 'https://sydneyicc.org/'
  const outFile = path.join(OUT_DIR, `ref_home_${size.name}.png`)
  const cmd = `${CHROME} --headless=new --disable-gpu --screenshot="${outFile}" --window-size=${size.width},${size.height} --hide-scrollbars "${url}" 2>/dev/null`
  try {
    execSync(cmd, { timeout: 15000 })
    console.log(`Captured ref_home_${size.name}.png`)
  } catch (e) {
    console.error(`Failed Sydney ICC @ ${size.name}:`, e.message)
  }
}

console.log('Done capturing all screenshots!')
