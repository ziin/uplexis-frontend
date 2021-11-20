import type { AppProps } from 'next/app'
import { globalStyles } from '../stitches.config'
import { library } from '@fortawesome/fontawesome-svg-core'
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

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()
  return <Component {...pageProps} />
}

export default MyApp
