import {
  Container,
  BannerContainer,
  GridContainer,
  OffersContainer,
  OffersTopTitle
} from '@/styles/pages/Home'
import SEO from '@/components/SEO'
import ProductCard from '@/components/Product'
import { FaLongArrowAltRight } from 'react-icons/fa'

import api from '@/services/api'
import { useProducts } from '@/hooks/products'

import Title from '@/components/Title'
import Filter from '@/components/Filter'
import { GetServerSideProps } from 'next'
import { Context } from 'node:vm'
import { useEffect, useState } from 'react'

export interface ProductData {
  id: string
  name: string
  category: string
  image: string
  nutritional_information: string
  observation: string
  unit_sale: string
  unit_buy: string
  fraction_buy: number
  fraction_sale: number
  cost_price: number
  sale_price: number
  wholesale_price: number
  organic: boolean
  highlights: boolean
  created_at: string
  updated_at: string
  image_url: string
}
interface HomeProps {
  limit: number
  page: number
  total_count: number
  data: ProductData[]
}

const Home: React.FC<HomeProps> = ({ data, limit, page, total_count }) => {
  const { initializeProducts } = useProducts()
  const [products, setProducts] = useState(data)

  useEffect(() => {
    initializeProducts(data)
  }, [initializeProducts])

  return (
    <Container>
      <SEO title="HOME" image="/banner.png" />
      <BannerContainer>
        <img src="banner.png" alt="" />
      </BannerContainer>

      <OffersTopTitle>
        <Title title="Ofertas" />
        <Filter
          buttonContent={
            <>
              <p>Filtrar por</p>
              <FaLongArrowAltRight />
            </>
          }
        >
          <li>Adicionados Recentemente</li>
          <li>Categorias</li>
          <li>Menor Preço</li>
          <li>Maior Preço</li>
          <li>Ordem Alfabética</li>
          <li>Promoções</li>
        </Filter>
      </OffersTopTitle>
      <OffersContainer>
        <GridContainer>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </GridContainer>
      </OffersContainer>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (
  context: Context
) => {
  const { data: listProducts } = await api.get('/products/in-list?type=offer')

  return {
    props: {
      ...listProducts
    }
  }
}

export default Home
