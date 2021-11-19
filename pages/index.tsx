import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

import { App, apps } from '../data/apps'
import { Category, categories } from '../data/categories'
import { Sort, filterApps } from '../utils/filters'

const Home = ({
  apps,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [category, setCategory] = useState<Category | null>(null)
  const [sortBy, setSortBy] = useState<Sort>(Sort.release)

  return (
    <div>
      <Head>
        <title>upMiner</title>
        <meta name="description" content="upMiner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Categories */}
        <nav>
          <ul>
            <li key="all" onClick={() => setCategory(null)}>
              <span>Todos</span>
            </li>
            {categories.map((category) => (
              <li key={category.id} onClick={() => setCategory(category)}>
                <span>{category.name}</span>
              </li>
            ))}
          </ul>
        </nav>

        <label htmlFor="sortby">Ordenar</label>
        <select
          id="sortby"
          value={sortBy}
          onChange={(e) => setSortBy(Number(e.target.value) as Sort)}
        >
          <option value={Sort.price}>Preço</option>
          <option value={Sort.release}>Lançamento</option>
        </select>

        {/* Apps */}
        <section>
          <ul>
            {filterApps(apps, category, sortBy).map(
              ({ id, title, price, release }) => (
                <li key={id}>
                  <Link href={`/${id}`} passHref={true}>
                    <pre>
                      {title}, {price}, {release}
                    </pre>
                  </Link>
                </li>
              )
            )}
          </ul>
        </section>
      </main>
    </div>
  )
}

type Props = {
  apps: App[]
  categories: Category[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      apps,
      categories,
    },
  }
}

export default Home
