import { Link } from "react-router-dom"



function Home() {
  return (
    <div>
      <h3>홈/메인페이지</h3>
      <ul>
        <li><Link to="/user">회원페이지</Link></li>
        <li><Link to="/user?id=aaa123&name=야옹이">회원페이지</Link></li>
        {/* 쿼리 파라미터 테스트  */}
        <li><Link to="/info/1/가지">인포페이지</Link></li>
        <li><Link to="/info/2/나비">인포페이지</Link></li>
        <li><Link to="/info/3/다람쥐">인포페이지</Link></li>
      </ul>

    </div>
  )
}

export default Home