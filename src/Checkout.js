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
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import Header2 from './Header2';
import Footer from './Footer';

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
  const  {buyerId} = useParams();
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const [temporaryBuyerInfo,setTemporaryBuyerInfo] = useState([]);
  const [temporaryPaymentInfo,setTemporaryPaymentInfo] = useState([]);
  
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


function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm update={setBuyerInfo}/>;
    case 1:
      return <PaymentForm update={setPaymentInfo}/>;
    case 2:
      return <Review data={temporaryPaymentInfo}/>;
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
                  此筆訂單可獲得的賴皮指數: 14 點
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
                  {activeStep === steps.length - 1 ?
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                     送出訂單
                    <NavigateNextIcon />
                  </Button>
                  :''}
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