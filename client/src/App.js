import NavBar from "./component/NavBar/NavBar";
import Home from "./component/Home/Home"
import Create from "./component/Create/Create";
// import { Route, Switch, Link} from "react-router-dom";
import { Routes, Route} from "react-router-dom";
import AboutMe from "./component/About/About";
import Beach from "./component/Category/Beach/Beach";
import Mountain from "./component/Category/Mountain/Mountain";
import Camping from "./component/Category/Camping/Camping"
import Town from "./component/Category/Town/Town"
import Contact from "./component/Contact/Contact";
import ChallengeFour from "./component/ChallengeFour";
import { useEffect, useState } from "react";


function App() {
const [postList, setPostList] = useState([1])
const [name, setName] = useState("Justin")

console.log("App function")

useEffect(() => {
  console.log("useEffect-App")
 fetch('/posts')
 .then(resp => resp.json())
 .then(data2 => {
   setPostList(data2)
 })
 .catch((err) => console.log(err))
},[])

  return (
    <>
      <NavBar postList={postList} setPostList={setPostList}/>
     <Routes>
        <Route exact path="/" element={<Home postList={postList} setPostList={setPostList}/>} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/create" element={<Create postList={postList} setPostList={setPostList}/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/beach" element={<Beach />} />
        <Route path="/mountain" element={ <Mountain />} />
        <Route path="/camping" element={<Camping />} />
        <Route path="/town" element={<Town />} />
        <Route path="/challenge" element={<ChallengeFour name={name} setName={setName}/>} />
      </Routes>
      </>
  )
}

export default App;
