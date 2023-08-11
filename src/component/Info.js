import { useParams } from "react-router-dom"



function Info() {

//쿼리 파라미터 값
const obj = useParams();
console.log(obj);
//info/1, info/2, info/3으로 갈때마다 크롬콘솔에 1, 2, 3중 맞는 파라미터값이 찍힌다.
//OBJ 값을 이용해서 서버에서는 데이터를 가져오고 state로 관리
//지금은서버가없어서안되는..

  return (
    <div>
      <h3>인포페이지</h3>
    </div>
  )
}

export default Info