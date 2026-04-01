import {  faSearch,faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser,faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'




const Navbar = ({authenticate,setAuthenticate}) => {
    const menuList= [
        "WOMEN",
        "MEN",
        "KID",
        "HOME"
    ]
    const [showSearch, setShowSearch] = useState(false)

    const toggleSearch = () => {
      setShowSearch(!showSearch)
    }
    
const navigate = useNavigate()
// 로그인
const goToLogin = ()=>{
navigate('/login')

}

// 로그아웃
const goToLogout = ()=>{
  setAuthenticate(false)
  localStorage.removeItem("login")
  navigate('/')
 

}

//logo 클릭 시 홈으로 돌아가기
const goToHome = ()=>{
  navigate('/')
 
}
const search = (event)=>{
  if(event.key === "Enter"){
 
    //입력한 검색어를 읽어와서 url 바꿔주기

  let keyword = event.target.value
  navigate(`/?q=${keyword}`)
  }
  
}

// 로컬스토리지 저장
useEffect(()=>{
 const login =  localStorage.getItem("login")
 if(login === "true"){
  setAuthenticate(true)
 }
},[])


  return (
    <div>
      

<div className="navbar">
  {/* 이미지 영역 */}
  <div className='logo-menu'>
      <img 
        src='data:image/png;base64,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' 
        width={100}
        onClick={goToHome}></img>
         <div className="navbar-bottom">
      <ul className="menu-list">
        {menuList.map(menu => (
          <li key={menu}>{menu}</li>
        ))}
      </ul>

    
    </div>
  </div>
{/* 계정 및 아이콘 영역 */}
  <div className="navbar-top">
    {/* 검색 영역 */}
    <div className="search-box">
  <FontAwesomeIcon 
    icon={faSearch} 
    className='icons'
    onClick={toggleSearch}
  />

  {showSearch && (
    <input 
      type="text" 
      placeholder="상품을 검색하세요."
      onKeyPress={(event)=>{search(event)}}
    />
  )}
</div>
      {/* 계정 및 기타 아이콘 */}
      <div className="login-button">
        <FontAwesomeIcon icon={faUser} className='icons'/>
        {
            authenticate === true ? 
            <span onClick={goToLogout}>
            로그아웃</span>
            :
            <span onClick={goToLogin}>
            로그인</span>
          }
        <FontAwesomeIcon icon={faHeart} className='icons'></FontAwesomeIcon>
        <FontAwesomeIcon icon={faCartShopping} className='icons'></FontAwesomeIcon> 
      </div>
    </div>
</div>
    
 {/* 로고 이미지 */}

 <div className='nav-section'>
 {/* 메뉴 + 검색 영역 */}

</div>

   
  </div>

)
}

export default Navbar
