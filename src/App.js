import Header from './Header';
import Footer from './Footer';
import Type from './Type';
import Cart from './Cart';
import Checkout from './Checkout';
import Inputinfo from './InputInfo';
import ChangeInfo from './ChangeInfo';
import BuyerInfo from './BuyerInfo';
import ProductsInfo from './ProductsInfo';
import Record from './Record';
import Pickpoint from './Pickpoint';
import Home from './Home';
import React,{ useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// const sections = [
//   { title: '零食', url: '#' },
//   { title: '生活雜貨', url: '#' },
//   { title: '美妝保養', url: '#' },
// ];

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
      {/* <Type />  */}
        {/* <Cart />  */}
       {/* <Checkout/>     */}
      {/* <Inputinfo/> */} 
      {/* <ChangeInfo /> */}
      {/* <BuyerInfo />  */}
       {/* <ProductsInfo />   */}
       {/* <Record />     */}
       {/* <Pickpoint />   */}
       <Home />
      <Footer title="LINE PICK" description="Wish you a wonderful day !" />
    </div>
  );
}

export default App;
