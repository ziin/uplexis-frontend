import { Sort } from '../utils/filters'

const SortBySelect = ({ selected, onSelect }: Props) => {
  return (
    <div>
      <label htmlFor="sortby">Ordenar</label>
      <select
        id="sortby"
        value={selected}
        onChange={(e) => onSelect(Number(e.target.value) as Sort)}
      >
        <option value={Sort.price}>Preço</option>
        <option value={Sort.release}>Lançamento</option>
      </select>
    </div>
  )
}

type Props = {
  selected: Sort
  onSelect: (sortBy: Sort) => void
}

export default SortBySelect
