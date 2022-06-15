import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import { Link } from "react-router-dom";
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';
import { useState } from "react";
import axios from "axios";
import VpnKeyIcon from '@material-ui/icons/VpnKey';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

  
    const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
            alert("Login in successfully")
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

    return (
        <div className='modal-apply'>
            <Button  className="btn-signin" onClick={handleClickOpen}>
            <i class="fa fa-key" aria-hidden="true"></i>
             login
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Login
                </BootstrapDialogTitle>
                
                <DialogContent dividers>

                    <div className="main-dialog">
                        <div className="sub-main">
                            <div>

                                <div className="imgs">
                                    <div className="container-image">
                                        <img src="https://p8cdn4static.sharpschool.com/UserFiles/Servers/Server_416292/Image/Profile%20pic.png" alt="profile" className="profile" />
                                    </div>                             
                                </div>

                                <form onSubmit={handleSubmit}>
                                <div>
                                    <div className="login__box">
                                        <MailIcon className='login__icon' style={{fontSize: '20px'}} />
                                        <input type="email" 
                                         className="name login__input"
                                         placeholder="Email"
                                         name="email"
                                         onChange={handleChange}
                                         value={data.email}
                                         required
                                        />
                                    </div>

                                    <div className="login__box">
                                        <LockIcon className='login__icon' style={{fontSize: '25px'}} />
                                        <input type="password" 
                                         className="name login__input"
                                         placeholder="Password"
                                         name="password"
                                         onChange={handleChange}
                                         value={data.password}
                                         required
                                        />
                                    </div>

                                    {error && <div className="error_msg">{error}</div>}

                                    <div className="login-button">
                                        <button type="submit" >Login</button>
                                    </div>

                                    <p className="link">
                                   <a href="#">Forgot password ?</a>
                                        <br /><a href="#">D'ont have an Account ?</a> Or 
                                        <Link to="/SignUp" >
                                         <a  variant="outlined" onClick={handleClickOpen}> Sign Up </a>
                                         </Link>
                                    </p>
                                </div>
                               </form>
                            </div>
                        </div>
                    </div>

                </DialogContent>
            </BootstrapDialog>
        </div>
    );
}


