import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { App, apps } from '../data/apps'
import { ParsedUrlQuery } from 'querystring'

export const Application = ({
  app: { title, description },
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  )
}

type Props = {
  app: App
}

interface IParams extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: GetStaticProps<Props, IParams> = (context) => {
  return {
    props: {
      app: apps[Number(context.params?.id)],
    },
  }
}

export const getStaticPaths: GetStaticPaths<IParams> = () => {
  const paths = apps.map(({ id }) => ({
    params: { id: id.toString() },
  }))
  return {
    paths,
    fallback: false,
  }
}

export default Application
