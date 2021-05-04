import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import React,{ useState, useEffect} from "react";
import axios from "axios";

function App() {

  const[sections,setSections]=useState([]);

  useEffect(() => {

    async function fetchData() {
      console.log("in Heaer useEffect:");
      const type = await axios.get("/Type");
      setSections(type.data);
      console.log("sections:" + sections);
    }
    fetchData();
  }, []);

  return (
    <div >
      <Header sections={sections}/>
       <Home />
      <Footer title="LINE PICK" description="Wish you a wonderful day !" />
    </div>
  );
}

export default App;
