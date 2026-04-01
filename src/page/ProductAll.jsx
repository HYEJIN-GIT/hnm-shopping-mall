import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import { Container ,Row,Col} from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'


const ProductAll = () => {
  const [productList,setProductList] = useState([])
  const [query,setQuery] = useSearchParams()
  const getProducts =async()=>{
    let searchQuery = query.get('q') || ""
    let url = `https://my-json-server.typicode.com/HYEJIN-GIT/hnm-shopping-mall/products?q=${searchQuery}`
    let response = await fetch(url)
    let data = await response.json()
    setProductList(data)
  }

  useEffect(()=>{
    getProducts()
  },[query]) // 쿼리 값이 바뀌면 호출해주기! 빈 값이면 딱 한 번만 호출 되기 때문
  return (
   
    <Container>
      <Row >
        {
       
          productList.map((menu)=>(
            <Col lg={3}>
            <ProductCard item={menu} ></ProductCard>
            </Col>
          ))
        }

      </Row>
    
    </Container>
  )
}

export default ProductAll
