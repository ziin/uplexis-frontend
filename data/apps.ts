export const apps: App[] = [
  {
    id: 0,
    title: 'Profissional',
    price: 29.99,
    release: '2020-01-01',
    category: 0,
  },
  {
    id: 1,
    title: 'Reguladores',
    description:
      'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A. e capital aberto e limitadas (LTDA) de grande porte.',
    price: 19.99,
    release: '2020-01-02',
    category: 1,
  },
  {
    id: 2,
    title: 'Sócio Ambiental',
    description:
      'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A. e capital aberto e limitadas (LTDA) de grande porte.',
    price: 39.99,
    release: '2020-01-03',
    category: 2,
  },
  {
    id: 3,
    title: 'Jurídico',
    description:
      'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A. e capital aberto e limitadas (LTDA) de grande porte.',
    price: 59.99,
    release: '2020-01-04',
    category: 3,
  },
  {
    id: 4,
    title: 'Listas Restritivas',
    description:
      'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A. e capital aberto e limitadas (LTDA) de grande porte.',
    price: 29.99,
    release: '2020-01-05',
    category: 4,
  },
  {
    id: 5,
    title: 'Mídia / Internet',
    description:
      'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A. e capital aberto e limitadas (LTDA) de grande porte.',
    price: 69.99,
    release: '2020-01-06',
    category: 5,
  },
  {
    id: 6,
    title: 'Bens e Imóveis',
    description:
      'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A. e capital aberto e limitadas (LTDA) de grande porte.',
    price: 29.99,
    release: '2020-01-07',
    category: 6,
  },
  {
    id: 7,
    title: 'Cadastro',
    description:
      'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A. e capital aberto e limitadas (LTDA) de grande porte.',
    price: 89.99,
    release: '2020-01-08',
    category: 7,
  },
  {
    id: 8,
    title: 'Financeiro',
    description:
      'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A. e capital aberto e limitadas (LTDA) de grande porte.',
    price: 29.99,
    release: '2020-01-09',
    category: 8,
  },
  {
    id: 9,
    title: 'Financeiro',
    description:
      'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A. e capital aberto e limitadas (LTDA) de grande porte.',
    price: 49.99,
    release: '2020-01-10',
    category: 8,
  },
  {
    id: 10,
    title: 'Sócio Ambiental',
    description:
      'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A. e capital aberto e limitadas (LTDA) de grande porte.',
    price: 29.99,
    release: '2020-01-11',
    category: 2,
  },
  {
    id: 11,
    title: 'Jurídico',
    description:
      'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A. e capital aberto e limitadas (LTDA) de grande porte.',
    price: 79.99,
    release: '2020-01-12',
    category: 3,
  },
]

export interface App {
  id: number
  title: string
  description?: string
  price: number
  release: string
  category: number
}
