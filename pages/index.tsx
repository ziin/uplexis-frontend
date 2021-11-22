import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useState } from 'react'
import CategoryBar from '../components/CategoryBar'
import SortBySelect from '../components/SortBySelect'
import AppList from '../components/AppList'

import { App, apps } from '../data/apps'
import { Category, categories } from '../data/categories'
import { Sort, filterApps } from '../utils/filters'
import { styled } from '../stitches.config'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import PageLayout from '../components/PageLayout'

const Home = ({
  apps,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [category, setCategory] = useState<Category | null>(null)
  const [sortBy, setSortBy] = useState<Sort>(Sort.release)

  return (
    <PageLayout title="upMiner" description="upMiner">
      <Main>
        <CategoryBar
          categories={categories}
          selected={category}
          onSelect={setCategory}
        />

        <SortBySelect selected={sortBy} onSelect={setSortBy} />

        <AppList
          apps={filterApps(apps, category, sortBy).map((app) => ({
            ...app,
            icon: categories[app.category].icon as IconProp,
          }))}
        />
      </Main>
    </PageLayout>
  )
}

const Main = styled('main', {
  mx: '$12',
})

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
