import Link from 'next/link'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { App, apps } from '../data/apps'
import { ParsedUrlQuery } from 'querystring'
import PageLayout from '../components/PageLayout'
import { styled } from '../stitches.config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../components/Button'

export const Application = ({
  app: { title, description },
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <PageLayout title={`upMiner: ${title}`} description={`upMiner: ${title}`}>
      <Main>
        <Link href="/" passHref>
          <Nav>
            <Icon icon="chevron-left" />
            <Title>{title}</Title>
          </Nav>
        </Link>
        <Content>
          <Description>{description}</Description>
        </Content>
        <Footer>
          <Price>
            <span>R$</span>
            <span>40,00</span>
          </Price>
          <Button>
            <Text>Habilitar</Text>
          </Button>
        </Footer>
      </Main>
    </PageLayout>
  )
}

const Main = styled('main', {
  mx: '$16',
  my: '$20',
})

const Nav = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  alignContent: 'center',
  height: '$40',
  gap: '$12',
  cursor: 'pointer',
})

const Icon = styled(FontAwesomeIcon, {
  fontSize: '$20',
  color: '$orangeLight',
})

const Title = styled('h2', {
  fontSize: '$24',
  fontWeight: '$light',
  color: '$orangeLight',
})

const Content = styled('div', {
  my: '$20',
})
const Description = styled('p', {
  fontSize: '$16',
  color: '$gray600',
  lineHeight: '$spaced',
})

const Footer = styled('div', {
  display: 'flex',
  gap: '$20',
})
const Price = styled('div', {
  '& > span:first-of-type': {
    marginRight: '$4',
  },
  '& > span:last-of-type': {
    fontSize: '$28',
  },
})

const Text = styled('span', {
  fontSize: '$16',
  letterSpacing: '0.5px',
})

type Props = {
  app: App
}

interface IParams extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: GetStaticProps<Props, IParams> = (context) => {
  return {
    props: {
      app: apps[Number(context.params?.id)],
    },
  }
}

export const getStaticPaths: GetStaticPaths<IParams> = () => {
  const paths = apps.map(({ id }) => ({
    params: { id: id.toString() },
  }))
  return {
    paths,
    fallback: false,
  }
}

export default Application
