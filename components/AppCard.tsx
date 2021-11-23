import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { styled } from '../stitches.config'
import { AppWithIcon } from './AppList'
import { formatPrice } from '../utils/formatters'

const AppCard = ({ id, icon, title, description, price }: AppWithIcon) => {
  return (
    <Container>
      <Content>
        <Icon icon={icon} />
        <Title>{title}</Title>
        <Descritpion>{description}</Descritpion>
      </Content>
      <Footer>
        <Price>{formatPrice(price)}</Price>
        <Link href={`/${id}`} passHref>
          <ShowMore>Saiba mais</ShowMore>
        </Link>
      </Footer>
    </Container>
  )
}

const Container = styled('div', {
  width: '100%',
  minHeight: '240px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'center',
  boxShadow: 'rgb(0 0 0 / 7%) 0px 0px 12px -1px',
  cursor: 'default',
  borderRadius: '$sm',
})

const Content = styled('div', {
  width: '100%',
  height: '100%',
  padding: '$28 $18 $20 $18 ',
  border: '1px solid $gray200',
  borderBottom: 'none',
  borderTopLeftRadius: '$sm',
  borderTopRightRadius: '$sm',
})

const Icon = styled(FontAwesomeIcon, {
  fontSize: '$28 !important',
  color: '$orange',
  marginBottom: '$18',
})

const Title = styled('p', {
  fontSize: '$18',
})

const Descritpion = styled('p', {
  fontSize: '$13',
  color: '$gray600',
  marginTop: '$20',
  lineHeight: '$spaced',
})

const Footer = styled('footer', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'center',
  width: '100%',
  height: '$54',
  px: '$18',
  color: '$white',
  background: 'linear-gradient(90deg, $orangeLight 0%, $orange 100%)',
  borderBottomLeftRadius: '$sm',
  borderBottomRightRadius: '$sm',
})

const Price = styled('p', {
  fontSize: '$18',
})

const ShowMore = styled('a', {
  fontSize: '$14',
})

export default AppCard
