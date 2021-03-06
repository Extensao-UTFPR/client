import { Container } from '@/styles/pages/Home'
import SEO from '@/components/SEO'
import ProductCard from '@/components/Product'

const Home: React.FC = () => {
  return (
    <Container>
      <SEO title="HOME" image="/banner.png" />
      <ProductCard
        photo="photo"
        productName="Batata"
        category="Legumes"
        price="10"
        unity="kg"
        quantity="2"
      />

      <h1>Next Starter structure</h1>
    </Container>
  )
}

export default Home
