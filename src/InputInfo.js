import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Typography from '@material-ui/core/Typography';
import { makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        height: 50,
        width: 50,
        backgroundColor: "#6b7f94",
    },
    title: {
        color: "#6b7f94",
        fontWeight: "bold",
        fontSize: 22,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(2),
    },
    submit: {
        margin: theme.spacing(3, 0, 5),
        backgroundColor: "#6b7f94",
    },
}));

export default function InputInfo() {
    const classes = useStyles();
    return (
        <div>
            <Container component="main" maxWidth="sm">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <AssignmentIndIcon fontSize="large"/>
                    </Avatar>
                    <Typography component="h1" variant="h6" className={classes.title}>
                        新增購買資訊
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="Name"
                                    name="Name"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="Name"
                                    label="姓名"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="Phone"
                                    label="聯絡電話"
                                    name="Phone"
                                    autoComplete="Phone"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="Email"
                                    label="聯絡信箱"
                                    name="Email"
                                    autoComplete="Email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="Address"
                                    label="聯絡地址"
                                    type="Address"
                                    id="Address"
                                    autoComplete="Address"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="同意以上述資料註冊LinePick會員"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            新增
                        </Button>
                    </form>
                </div>
            </Container>
        </div>
    );
}