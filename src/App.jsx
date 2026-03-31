import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import ProductAll from './page/ProductAll'
import LoginPage from './page/LoginPage'
import ProductDetail from './page/ProductDetail'
import Navbar from './component/Navbar'

//1. 전체 상품 페이지, 로그인 페이지. 상품 상세 페이지
//navbar 만들기
//2. 전ㅔ 상품 페이지에서는 전체 상품을 볼 수 있다
//3. 로그인 버튼을 누르면 로그인 페이지가 나온다
//4. 상품 디테일을 눌렀으나 로그인이 되어있지 않으면 로그인 페이지가 먼저 나온다
//5.로그인이 되어있을 겨웅에는 상품 디테일 페이지를 볼수있다
//6. 로그아웃 버튼을 누르면 로그아웃이 된다
//7. 로그아웃이 되면 상픔 디테일 파일 볼수 없다.다시 로그인 페이지가 보인다
//8. 로그인을 하면 로그아웃 보이고 로그아웃을 하면 로그인이 보인다
//9. 상품을 검색 할 수 있다.
function App() {
  
 
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<ProductAll></ProductAll>}></Route>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/product/:id' element={<ProductDetail></ProductDetail>}></Route>
      </Routes>
    </div>
  )
}

export default App
