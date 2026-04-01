import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const ProductCard = ({item}) => {
  const navigate = useNavigate()
  const goToPrivate = ()=>{
  navigate(`/product/${item.id}`)
    
  }
  const goToFavorite = ()=>{

  }

  return (
    <div className="product-card" >
    <img src={item?.img} width={250}  onClick={goToPrivate}/>
    <div>{item?.choice === true?"Conscious choice":""}</div>
    <div>{item?.title}</div>
    <div className="price-row">
          <span className="price">₩{item?.price}</span>
          <FontAwesomeIcon 
            icon={faHeart} 
            className="heart-icon"
            onClick={goToFavorite}
          />
        </div>
    
    <div>{item?.new === true?"신제품" : ""}</div>
  
</div>
  )
}

export default ProductCard
