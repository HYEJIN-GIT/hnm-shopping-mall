import React from 'react'
import { Form,Button,Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const LoginPage = ({setAuthenticate}) => {
  const navigate = useNavigate()
  const loginUser = (event)=>{
    event.preventDefault()
    setAuthenticate(true)
    localStorage.setItem("login","true")
    navigate('/')
    
    
    }

  return (
    <Container className="login-page">
    <div className="login-box">
      
      <h2>로그인</h2>
  
      <Form onSubmit={(event)=>loginUser(event)}>
  
        <Form.Group className="input-group">
          <Form.Control 
            type="email" 
            placeholder="이메일" 
          />
        </Form.Group>
  
        <Form.Group className="input-group">
          <Form.Control 
            type="password" 
            placeholder="비밀번호" 
          />
        </Form.Group>
  
        <div className="login-options">
          <Form.Check type="checkbox" label="로그인 상태 유지" />
        </div>
  
        <Button type="submit" className="login-btn">
          로그인
        </Button>
  
      </Form>
  
      <div className="login-footer">
        <span>회원가입</span>
        <span>비밀번호 찾기</span>
      </div>
  
    </div>
  </Container>
  )
}

export default LoginPage
