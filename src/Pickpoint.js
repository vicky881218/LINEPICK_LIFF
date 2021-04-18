import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Alert, AlertTitle } from '@material-ui/lab';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StarIcon from '@material-ui/icons/Star';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
    title: {
        color: "#6b7f94",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    divider: {
        marginBottom: 10,
    },
    body: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'space-around',
        overflow: 'hidden',
        padding: 20,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(2),
    },
    itemText: {
        fontSize: 18,
        color: "#8C7599",
        fontWeight: "bold",
    },
    submit: {
        fontSize: 15,
        margin: theme.spacing(2, 0, 3),
    },
    expand: {
        marginBottom: 15,
    },
    heading: {
        fontSize: 15,
        color: "#6b7f94",
    },
}));

export default function Pickpoint() {
    const classes = useStyles();
    const [value, setValue] = React.useState('all');
    const handleChange = (event) => {
      setValue(event.target.value);
    };

    return (
        <body className={classes.body}>
            <div className={classes.container}>
                <div className={classes.title}>
                    <StarIcon fontSize="medium" />
                    賴皮指數
                </div>
                <Divider className={classes.divider} />
                <form className={classes.form} noValidate>
                    <List>
                        <ListItem alignItems="flex-start">
                            <ListItemText>
                                <div className={classes.itemText}>您的賴皮指數: </div>
                            </ListItemText>
                        </ListItem>
                        <ListItem alignItems="flex-start">
                            <ListItemText >
                                <div className={classes.itemText}>您的賴皮購物金: </div>
                            </ListItemText>
                        </ListItem>
                    </List>
                    <Accordion className={classes.expand}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>兌換購物金</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <FormControl component="fieldset">
                                    <RadioGroup aria-label="exchange" name="exchange" value={value} onChange={handleChange}>
                                        <FormControlLabel value="all" control={<Radio />} label="全部兌換" />
                                        <FormControlLabel value="one" control={<Radio />} label="兌換一次" />
                                    </RadioGroup>
                                </FormControl>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="outlined"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    兌換
                                </Button>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Alert severity="info">
                        <AlertTitle>賴皮購物金兌換規則:</AlertTitle>
                        <strong>100點賴皮指數可兌換10元購物金，消費金額每滿100可使用10元購物金</strong>
                    </Alert>
                </form>
            </div>
        </body >
    );
}
