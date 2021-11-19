export const categories: Category[] = [
  {
    id: 0,
    name: 'Profissional',
    icon: 'briefcase',
  },
  {
    id: 1,
    name: 'Reguladores',
    icon: 'landmark',
  },
  {
    id: 2,
    name: 'Sócio Ambiental',
    icon: 'tree',
  },
  {
    id: 3,
    name: 'Jurídico',
    icon: 'gavel',
  },
  {
    id: 4,
    name: 'Lista Restritivas',
    icon: 'ban',
  },
  {
    id: 5,
    name: 'Mídia / Internet',
    icon: 'globe-americas',
  },
  {
    id: 6,
    name: 'Bens e Imóveis',
    icon: 'gem',
  },
  {
    id: 7,
    name: 'Cadastro',
    icon: 'male',
  },
  {
    id: 8,
    name: 'Financeiro',
    icon: 'piggy-bank',
  },
]

export interface Category {
  id: number
  name: string
  icon: string
}
