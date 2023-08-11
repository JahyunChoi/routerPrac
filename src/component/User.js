import { useLocation, useSearchParams } from "react-router-dom"

function User() {

  //쿼리 스트링 값을 받는 방법1
  const location = useLocation();
  console.log(location);

  //쿼리 스트링 값을 받는 방법2 
  //첫번째인덱스 set, get가진 객체,
  //두번째인덱스 쿼리스트링을 직접 젼경할 수 있는 함수
  const [obj, setObj] = useSearchParams();

  //아이디를 뽑아오기
  let id = obj.get("id"); //== reauest.getParameter("키");
  //이름값을 뽑아오기
  let name = obj.get("name");




  return (
    <div>
      <h3>유저페이지</h3>

      쿼리스트리id:{id}<br/>
      쿼리스트리name:{name}

    </div>
  )
}

export default User