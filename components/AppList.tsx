import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Link from 'next/link'
import { App } from '../data/apps'
import { styled } from '../stitches.config'
import AppCard from './AppCard'

const AppList = ({ apps }: Props) => {
  return (
    <List>
      {apps.map((app) => (
        <AppCard key={app.id} {...app} />
      ))}
    </List>
  )
}

const List = styled('div', {
  display: 'grid',
  gap: '$24',
  marginBottom: '$24',

  '@sm': {
    gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
  },

  '@md': {
    gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
  },

  '@desktop': {
    gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
  },
})

export type AppWithIcon = App & { icon: IconProp }
type Props = {
  apps: AppWithIcon[]
}

export default AppList
