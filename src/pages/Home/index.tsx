import { Banner } from './components/Banner'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <Shelf />
    </HomeContainer>
  )
}