import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container,Row,Col } from 'react-bootstrap'
const ProductDetail = () => {
  let {id} = useParams()
  console.log({id})
  const [product,setProduct] = useState(null)
 
  const getProductsDetail =async()=>{
    let url = `https://my-json-server.typicode.com/HYEJIN-GIT/hnm-shopping-mall/products/${id}`
    let response = await fetch(url)
    let data = await response.json()
  console.log(data)
  setProduct(data)
  }

  useEffect(()=>{
    getProductsDetail()
  },[])
  return (
    <Container className="detail-page">
  <Row>
    {/* 이미지 */}
    <Col className="detail-img">
      <img src={product?.img} />
    </Col>

    {/* 오른쪽 정보 */}
    <Col className="detail-info">

      <h6 className="title">{product?.title}</h6>
      <h5 className="price">₩{product?.price}</h5>

      <img src={product?.img} width={100} className="sub-img" />

      {/* 사이즈 */}
      <div className="size">
        <span>34</span>
        <span>36</span>
        <span>38</span>
        <span>40</span>
        <span>42</span>
      </div>

      <div className="size-guide">사이즈 가이드</div>

      <button className="add-btn">추가</button>

      {/* 매장 */}
      <div className="store-box">
        <div>매장별 제품 찾기</div>
        <div className='stock'> 재고확인</div>
      </div>

      {/* 아코디언 느낌 */}
      <div className="accordion">
        <div className="acc-row">
          <span>설명 & 핏</span>
          <button>+</button>
        </div>

        <div className="acc-row">
          <span>소재</span>
          <button>+</button>
        </div>

        <div className="acc-row">
          <span>의류 관리 가이드</span>
          <button>+</button>
        </div>

        <div className="acc-row">
          <span>배송 및 결제</span>
          <button>+</button>
        </div>
      </div>

    </Col>
  </Row>
</Container>
  )
}

export default ProductDetail
