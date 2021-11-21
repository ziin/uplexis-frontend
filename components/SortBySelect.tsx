import { styled } from '../stitches.config'
import { Sort } from '../utils/filters'

const SortBySelect = ({ selected, onSelect }: Props) => {
  return (
    <Container>
      <Label htmlFor="sortby">ORDENAR</Label>
      <SelectWrapper>
        <Select
          id="sortby"
          value={selected}
          onChange={(e) => onSelect(Number(e.target.value) as Sort)}
        >
          <option value={Sort.price}>Preço</option>
          <option value={Sort.release}>Lançamento</option>
        </Select>
      </SelectWrapper>
    </Container>
  )
}

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$12',
  my: '$24',
})

const Label = styled('label', {
  fontWeight: 'bold',
  fontSize: '$14',
})

const SelectWrapper = styled('div', {
  position: 'relative',

  '&:after': {
    content: '',
    width: '0px',
    height: '0px',
    borderLeft: '4px solid transparent',
    borderRight: '4px solid transparent',
    borderTop: '4px solid $gray900',
    top: '14px',
    right: '8px',
    position: 'absolute',
  },
})

const Select = styled('select', {
  height: '$32',
  backgroundColor: '$background',
  paddingLeft: '$12',
  paddingRight: '$28',
  borderRadius: '4px',
  appearance: 'none',
  borderColor: '$gray200',
  outlineColor: '$orange',
})

type Props = {
  selected: Sort
  onSelect: (sortBy: Sort) => void
}

export default SortBySelect
