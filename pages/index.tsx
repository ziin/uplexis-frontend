import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { App, apps } from '../data/apps'
import { Category, categories } from '../data/categories'

const Home = ({
  apps,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
            {categories.map((category) => (
              <li key={category.id}>
                <span>{category.name}</span>
              </li>
            ))}
          </ul>
        </nav>

        {/* Apps */}
        <section>
          <ul>
            {apps.map(({ id, title, price, release }) => (
              <li key={id}>
                <pre>
                  {title}, {price}, {release}
                </pre>
              </li>
            ))}
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
