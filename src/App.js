import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import Footer from './Footer';
import Type from './Type';
import Cart from './Cart';
import Checkout from './Checkout';
import Inputinfo from './InputInfo';
import ChangeInfo from './ChangeInfo';
import BuyerInfo from './BuyerInfo';
import ProductsInfo from './ProductsInfo';

const useStyles = makeStyles((theme) => ({
  
}));

const sections = [
  { title: '零食', url: '#' },
  { title: '生活雜貨', url: '#' },
  { title: '美妝保養', url: '#' },
];

function App() {
  const classes = useStyles();
  return (
    <div >
      <Header title="Line Pick" sections={sections} />
      {/* <Type />  */}
      <Cart />
      {/* <Checkout/>  */}
      {/* <Inputinfo/> */}
      {/* <ChangeInfo /> */}
      {/* <BuyerInfo /> */}
      {/* <ProductsInfo /> */}

      <Footer title="Line Pick" description="Wish you a wonderful day !" />
    </div>
  );
}

export default App;
