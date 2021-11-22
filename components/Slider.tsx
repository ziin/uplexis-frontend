import Image from 'next/image'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { styled } from '../stitches.config'
import Button from './Button'

const Slider = ({ interval = 10000 }: Props) => {
  return (
    <Carousel
      autoPlay
      swipeable={false}
      interval={interval}
      infiniteLoop
      transitionTime={1000}
      showArrows={false}
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
    >
      <Banner type="dark">
        <Header>
          <Image
            src="/upminer-logo-white.png"
            alt="upminer logo"
            width={134}
            height={39}
          />
          <Divider />
          <Title>Histórico Empresárial</Title>
        </Header>
        <Content>
          <Description>
            O aplicativo Histórico Empresarial permite ao usuário ter acesso a
            todos os fatos e acontecimentos relevantes de uma empresa desde o
            seu ano de fundação.
          </Description>
          <Footer>
            <Price>
              <span>R$</span>
              <span>40,00</span>
            </Price>
            <Button>
              <Text>Saiba mais</Text>
            </Button>
          </Footer>
        </Content>
      </Banner>
      <Banner type="light">
        <Header>
          <Image
            src="/upminer-logo.png"
            alt="upminer logo"
            width={134}
            height={39}
          />
          <Divider css={{ background: '$gray900' }} />
          <Title>Histórico Empresárial</Title>
        </Header>
        <Content>
          <Description>
            O aplicativo Histórico Empresarial permite ao usuário ter acesso a
            todos os fatos e acontecimentos relevantes de uma empresa desde o
            seu ano de fundação.
          </Description>
          <Footer>
            <Price>
              <span>R$</span>
              <span>40,00</span>
            </Price>
            <Button>
              <Text>Saiba mais</Text>
            </Button>
          </Footer>
        </Content>
      </Banner>
    </Carousel>
  )
}

const Banner = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  height: '240px',
  px: '$24',
  py: '$20',
  cursor: 'default',

  '@tablet': {
    px: '$32',
  },
  '@desktop': {
    px: '$40',
  },

  variants: {
    type: {
      dark: {
        color: '$gray200',
        background:
          'linear-gradient(90deg, rgba(20,79,117,1) 0%, rgba(0,16,33,1) 65%)',
      },
      light: {
        color: '$gray900',
        background:
          'linear-gradient(90deg, rgba(215,215,215,1) 0%, rgba(240,240,240,1) 65%)',
      },
    },
  },

  defaultVariants: {
    type: 'dark',
  },
})

const Header = styled('div', {
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$12',
})

const Divider = styled('div', {
  width: '1px',
  height: '80%',
  background: '$gray200',
})

const Title = styled('h2', {
  fontSize: '$20',
  fontWeight: '$normal',
  whiteSpace: 'nowrap',

  '@tablet': {
    fontSize: '$24',
  },
})

const Content = styled('div', {
  width: '100%',
  maxWidth: '450px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginTop: '$24',
})

const Description = styled('p', {
  fontWeight: '$light',
  fontSize: '$14',
  textAlign: 'start',
  lineHeight: '$spaced',
})

const Footer = styled('div', {
  display: 'flex',
  gap: '$20',
})
const Price = styled('div', {
  '& > span:first-of-type': {
    fontWeight: '$light',
    marginRight: '$4',
  },
  '& > span:last-of-type': {
    fontSize: '$28',
  },
})

const Text = styled('span', {
  fontSize: '$14',
})

type Props = {
  interval?: number
}

export default Slider
