import type { AppProps } from 'next/app'
import { globalStyles } from '../stitches.config'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  faBan,
  faBriefcase,
  faChevronLeft,
  faGavel,
  faGem,
  faGlobe,
  faGlobeAmericas,
  faLandmark,
  faMale,
  faPiggyBank,
  faTree,
} from '@fortawesome/free-solid-svg-icons'

// Adding the icons to the library, for them to be available globally.
// It also reduces the bundle size.
library.add(
  faBriefcase,
  faLandmark,
  faTree,
  faGavel,
  faBan,
  faGlobeAmericas,
  faGem,
  faMale,
  faPiggyBank,
  faGlobe,
  faChevronLeft
)

// Prevent fontawesome from adding its CSS since we did it manually above:
config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()
  return <Component {...pageProps} />
}

export default MyApp
