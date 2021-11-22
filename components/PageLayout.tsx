import { styled } from '../stitches.config'

const PageLayout: React.FC = ({ children }) => {
  return <Page>{children}</Page>
}

const Page = styled('div', {
  maxWidth: '1200px',
  mx: 'auto',
})

export default PageLayout
