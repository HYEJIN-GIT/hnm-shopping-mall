#  🛍️ Shopping Mall Web App (H&M 따라하기)

React 기반 쇼핑몰 웹 애플리케이션입니다. <br>
상품 목록 조회, 로그인, 상품 상세 페이지 기능 등을 구현하였습니다.
 <br>
🚀 Demo 링크 : https://hnm-shopping-mall-hj.netlify.app/


## 📸 Preview 
### 1. 홈화면
<img width="1900" height="955" alt="image" src="https://github.com/user-attachments/assets/60288f97-6310-4d3c-bb5d-5b861fb4ced7" />
 
 <br>

### 2. 로그인 페이지
<img width="1900" height="955" alt="image" src="https://github.com/user-attachments/assets/423ffe4d-e9d8-4626-ad06-85d7ca14f301" />

 <br>
 
### 3. 상세 페이지
<img width="1900" height="976" alt="image" src="https://github.com/user-attachments/assets/8308422a-f120-4292-9ecc-6fa6820d8ab7" />

 
 <br>
 
## 🛠 사용 기술
### Frontend
- React
- React Router DOM
- Bootstrap
- CSS

### Data
- JSON Server (db.json)
- REST API 방식 fetch

### Storage
- LocalStorage

## ⚙️ 주요 기능

### 1. 상품 리스트 조회 (ProdutAll.jsx)
 - db.json 기반 상품 데이터 불러오기
 - API 요청을 통해 전체 상품 데이터 가져와 화면 랜더링
 - query 값 변경 시, 자동으로 데이터 다시 요청
 - URL의 쿼리 값을 이용하여 검색 기능 구현

<br>

```
  const [query,setQuery] = useSearchParams()
  const getProducts =async()=>{
    let searchQuery = query.get('q') || ""
    let url = `https://my-json-server.typicode.com/HYEJIN-GIT/hnm-shopping-mall/products?q=${searchQuery}`
    let response = await fetch(url)
    let data = await response.json()
    setProductList(data) //
  }

  useEffect(()=>{
    getProducts()
  },[query]) // 쿼리 값이 바뀌면 호출해주기! 빈 값이면 딱 한 번만 호출 되기 때문
  return (
   
```
<br>

### 2. 검색 기능 (Navbar.jsx)
- 사용자가 Enter 입력 시 검색 실행
- 입력한 키워드를 URL query(q)로 전달
- URL 변경 → 상품 리스트 재요청 (상품 리스트 기능과 연결됨)
<br>

```
const search = (event)=>{
  if(event.key === "Enter"){
 
 //입력한 검색어를 읽어와서 url 바꿔주기

  let keyword = event.target.value
  navigate(`/?q=${keyword}`)
  }
  
}
```


### 3. 💾 로그인/로그아웃 및 권한
- 로그인 시 authenticate 상태를 true로 변경
- LocalStorage에 로그인 상태 저장 → 새로고침 시에도 유지
- 앱 실행 시 useEffect를 통해 로그인 상태 복원

<br>
✅ 로그인 기능 (LoginPage.jsx)

```
 const loginUser = (event)=>{
    event.preventDefault()
    setAuthenticate(true) // 로그인 상태 변경
    localStorage.setItem("login","true") // 로컬스토리지 저장
    navigate('/',{ replace: true })
    }
```

<br>

✅ 로그인 상태 유지 (Navbar.jsx)
```
useEffect(()=>{
 const login =  localStorage.getItem("login")
 if(login === "true"){
  setAuthenticate(true)
 }
},[])

```
<br>

✅ 로그아웃 기능 (Navbar.jsx)
```
const goToLogout = ()=>{
  setAuthenticate(false)
  localStorage.removeItem("login") //로컬 스토리지 삭제
  navigate('/')
}
```
<br>

### 4. 🚫 접근 제한 (Private Route.JSX)
- 로그인한 사용자만 상품 상세 페이지 접근 가능
- 미로그인 상태일 경우 로그인 페이지로 자동 리다이렉트
- React Router의 <Navigate>를 활용하여 보호된 라우팅 구현 (리다이렉트)
```
authenticate === true 
  ? <ProductDetail /> 
  : <Navigate to="/login" replace />
```
<br>

### 5. 🧭 Navbar 기능
- 로고 클릭 시 홈으로 이동 (useNavigate() 활용)
- 로그인 상태에 따라 로그인 / 로그아웃 UI 변경
- 검색 아이콘 클릭 시 검색창 토글

<br>

## ⚠️ 문제점 및 배운 점

### 🔐 로그인 후 뒤로가기 문제 (PrivateRoute.JSX)
- 로그인 후 상품 상세 페이지에 진입한 상태에서 브라우저 ‘뒤로가기’를 누르면 다시 로그인 페이지로 이동하는 문제 발생 <br>
이는 로그인 페이지로 이동할 때 사용한 <Navigate>가 히스토리 스택에 남아있기 때문에 발생  <br>
뒤로가기 시 이전 페이지(로그인)로 돌아가고, 다시 인증 체크에 의해 페이지 이동이 반복되는 현상이 나타남
✅ 해결 방안 : navigate 함수에서 "replace: true " 옵션을 사용하여 ,로그인 페이지를 히스토리 스택에 남기지 않도록 처리

<br>

```
<Navigate to ="/login" replace={true}></Navigate>
```
<br>

## 🚧 개선 예정
### 1. ❤️ 찜하기 기능 (LocalStorage + 권한 처리)
- LocalStorage를 활용하여 사용자가 선택한 상품을 저장
- 로그인 상태(authenticate)와 연동하여 사용자별 기능 확장 예정
- 찜한 상품을 별도의 페이지에서 확인 가능하도록 구현 예정

<br>

### 2. 검색어 에러 처리 (try-catch)
- API 요청 과정에서 발생할 수 있는 오류를 대비하여 try-catch를 활용한 예외 처리 적용 예정 (검색어 0개의 경우)
