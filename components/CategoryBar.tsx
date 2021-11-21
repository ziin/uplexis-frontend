import { Category } from '../data/categories'
import { styled } from '../stitches.config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import DragScroll from 'react-indiana-drag-scroll'

const CategoryBar = ({ categories, selected, onSelect }: Props) => {
  return (
    <Nav>
      <List>
        <Item key={-1} onClick={() => onSelect(null)} selected={!selected}>
          <Icon icon="globe" />
          <span>Todos</span>
        </Item>
        {categories.map((category) => (
          <Item
            key={category.id}
            onClick={() => onSelect(category)}
            selected={selected?.id === category.id}
          >
            <Icon icon={category.icon as IconProp} />
            <span>{category.name}</span>
          </Item>
        ))}
      </List>
    </Nav>
  )
}

const Nav = styled('nav', { my: '$12' })

const List = styled(DragScroll, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: '$64',
  borderRadius: '$sm',

  '@tablet': {
    height: '$84',
  },
})

const Item = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  minWidth: '$112',
  height: '100%',
  backgroundColor: '$gray100',
  cursor: 'pointer',
  fontSize: '$13',
  gap: '$8',
  px: '$8',
  textAlign: 'center',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  border: '1px solid $gray200',
  borderRight: 'none',

  '&:first-of-type': {
    borderTopLeftRadius: '$sm',
    borderBottomLeftRadius: '$sm',
  },
  '&:last-of-type': {
    borderBottomRightRadius: '$sm',
    borderTopRightRadius: '$sm',
  },

  variants: {
    selected: {
      false: {
        '&:hover': {
          backgroundColor: '$orangeLight',
          borderColor: '$orangeLight',
          color: '$gray100',

          '& + div': {
            borderLeft: '1px solid transparent',
          },
        },

        '&:last-of-type': {
          borderRight: '1px solid $gray200',

          '&:hover': {
            borderColor: '$orangeLight',
          },
        },
      },
      true: {
        backgroundColor: '$orange',
        borderColor: '$orange',
        color: '$white',
        boxShadow: '0px 0px 8px #FF6F01',
        zIndex: '9999',

        '& + div': {
          borderLeft: '1px solid transparent',
        },

        '&:last-of-type': {
          borderRight: '1px solid $orange',
        },
      },
    },
  },
})

const Icon = styled(FontAwesomeIcon, {
  fontSize: '$16',
})

type Props = {
  categories: Category[]
  selected: Category | null
  onSelect: (category: Category | null) => void
}

export default CategoryBar
