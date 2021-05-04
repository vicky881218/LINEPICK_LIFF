import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import CreateIcon from '@material-ui/icons/Create';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import Header2 from './Header2';
import Footer from './Footer';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#77773c",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 22,
    marginBottom: 10,
  },
  subtitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 15,
    marginBottom: 10,
  },
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  mainButton: {
    fontSize: 16,
    textDecoration: "underline",
    color: "#8C7599",
  },
}));

const steps = ['基本資訊', '付款資訊', '訂單明細'];


export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const  {id} = useParams();
  // const handleNext = () => {
  //   setActiveStep(activeStep + 1);
  // };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const [temporaryBuyerInfo,setTemporaryBuyerInfo] = useState([]);
  const [temporaryPaymentInfo,setTemporaryPaymentInfo] = useState([]);
  const [receivePickpoint,setReceivePickpoint] = useState(0);

  const  [buyerInformations, setBuyerInformations] =  useState([]);

  useEffect(() => {
    async function fetchData () {     
      console.log ("buyerId:"+id);
      const result = await axios.get('/Checkout/'+id);
      console.log ("result:"+result.data);
      console.log(result.data);
      setBuyerInformations(result.data);
    }
    fetchData();
  },[activeStep]);
  
//等同於function setBuyerInfo(buyerInfo){}
const setBuyerInfo = (buyerInfo)=> {
  console.log("update from AddressForm");
  console.log(buyerInfo);
  setTemporaryBuyerInfo(buyerInfo);
  setActiveStep(activeStep + 1);
}
console.log("temporaryBuyerInfo");
console.log(temporaryBuyerInfo);

const setPaymentInfo = (paymentInformation)=> {
  console.log("update form PaymentForm");
  console.log(paymentInformation);
  setTemporaryPaymentInfo(paymentInformation);
  setActiveStep(activeStep + 1);

}
console.log("temporaryPaymentInfo");
console.log(temporaryPaymentInfo);

const setReviewInfo = (reviewInfo)=> {
  console.log("back to checkout");
  console.log(reviewInfo);
  const realPay = reviewInfo.split(" ")[0];
  const restPickmoney = reviewInfo.split(" ")[1];
  var receivePickpoint=10*(Math.floor(realPay/100)); 
  console.log("receivePickpoint"+receivePickpoint);
  console.log("restPickmoney"+restPickmoney);
  setReceivePickpoint(receivePickpoint);
  setActiveStep(activeStep + 1);
  var totalPickmoney = buyerInformations.pickpoint + receivePickpoint;
  const buyerInfomation={
    buyerId:id,
    buyerName:buyerInformations.buyerName,
    buyerPhone:buyerInformations.buyerPhone,
    buyerMail:buyerInformations.buyerMail,
    buyerAddress:buyerInformations.buyerAddress,
    pickmoney:restPickmoney,
    pickpoint:totalPickmoney
  };
  console.log("in send buyerInfo"+buyerInfomation);

  axios.put("/BuyerInformation/", buyerInfomation)
  .then(res => {
    console.log(res);
    console.log(res.data);
  });
}


function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm update={setBuyerInfo}/>;
    case 1:
      return <PaymentForm update={setPaymentInfo}/>;
    case 2:
      return <Review update={setReviewInfo} data={temporaryPaymentInfo}/>;
    default:
      throw new Error('Unknown step');
  }
}

  return (
    <div>
    <Header2/> 
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography className={classes.title} align="center">
            <CreateIcon />
            填寫購買資訊
          </Typography>
          <Divider />
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h6" gutterBottom align="center" className={classes.title}>
                  LINE PICK 感謝您的購買
                </Typography>
                <Typography variant="h6" gutterBottom align="center" className={classes.subtitle}>
                  此筆訂單可獲得的賴皮指數: {receivePickpoint} 點
                </Typography>
                <Typography variant="h6" gutterBottom align="center" className={classes.title}>
                  <Button variant="text" className={classes.mainButton}>
                  <Link to={'/'} >
                    回首頁
                    </Link>
                </Button>
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                </div> 
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
    <Footer/>
    </div>
  );
}