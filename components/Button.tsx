import { styled } from '../stitches.config'

const Button: React.FC = ({ children }) => {
  return <Container>{children}</Container>
}

const Container = styled('button', {
  appearance: 'none',
  background: 'linear-gradient(90deg, $orangeLight 0%, $orange 100%)',
  border: 'none',
  color: '$white',
  fontWeight: '$normal',
  padding: '$8 $16',
  borderRadius: '$sm',
  cursor: 'pointer',
  userSelect: 'none',

  '&:hover': {
    background: '$orange',
  },
})

export default Button
