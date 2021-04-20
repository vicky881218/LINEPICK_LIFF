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

const sections = [
  { title: '零食', url: '#' },
  { title: '生活雜貨', url: '#' },
  { title: '美妝保養', url: '#' },
];

function App() {
  return (
    <div >
      <Header title="LINE PICK" sections={sections} />
      {/* <Type />  */}
        <Cart /> 
       {/* <Checkout/>     */}
      {/* <Inputinfo/> */} 
      {/* <ChangeInfo /> */}
      {/* <BuyerInfo />  */}
       {/* <ProductsInfo />   */}
       {/* <Record />     */}
       {/* <Pickpoint />   */}

      <Footer title="LINE PICK" description="Wish you a wonderful day !" />
    </div>
  );
}

export default App;
