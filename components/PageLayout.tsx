import Head from 'next/head'
import { styled } from '../stitches.config'
import Slider from './Slider'

const PageLayout: React.FC<Props> = ({ children, title, description }) => {
  return (
    <Page>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header>
        <Slider interval={10000} />
      </header>

      {children}
    </Page>
  )
}

const Page = styled('div', {
  maxWidth: '1200px',
  mx: 'auto',
})

type Props = {
  title?: string
  description?: string
}

export default PageLayout
