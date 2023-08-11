import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Info from "./component/Info";
import User from "./component/User";


function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Home/>} />
      {/* 쿼리스트링 써봄 */}     
       <Route path="/user" element={<User/>} />
      {/* 쿼리 파라미터 - 추가설정 */}
      <Route path="/info/:a/:b" element={<Info/>} />
      
    </Routes>

  );
}

export default App;
