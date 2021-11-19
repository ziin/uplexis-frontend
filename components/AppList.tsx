import Link from 'next/link'
import { App } from '../data/apps'

const AppList = ({ apps }: Props) => {
  return (
    <ul>
      {apps.map(({ id, title, price, release }) => (
        <li key={id}>
          <Link href={`/${id}`} passHref={true}>
            <pre>
              {title}, {price}, {release}
            </pre>
          </Link>
        </li>
      ))}
    </ul>
  )
}

type Props = {
  apps: App[]
}

export default AppList
