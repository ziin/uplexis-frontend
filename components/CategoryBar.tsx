import { Category } from '../data/categories'

const CategoryBar = ({ categories, selected, onSelect }: Props) => {
  return (
    <nav>
      <ul>
        <li
          key="all"
          onClick={() => onSelect(null)}
          style={{ fontWeight: selected === null ? 700 : 400 }}
        >
          <span>Todos</span>
        </li>
        {categories.map((category) => (
          <li
            key={category.id}
            onClick={() => onSelect(category)}
            style={{ fontWeight: selected?.id === category.id ? 700 : 400 }}
          >
            <span>{category.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  )
}

type Props = {
  categories: Category[]
  selected: Category | null
  onSelect: (category: Category | null) => void
}

export default CategoryBar
