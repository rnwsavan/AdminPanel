import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';

function Medicine(props) {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [expiry, setExpiry] = useState('');
    const [sumbit, setSubmit] = useState('Medicine');

    let Medicine = {
        name: yup.string().required("Please Enter Medicine Name"),
        price:yup.string().required("Please Enter Medicine Price"),
        quantity:yup.string().required("Please Enter Medicine Quantity"),
        expiry:yup.string().required("Please Enter Medicine Expiry"),
    }

    let schema, initiValue;

    if(sumbit === "Medicine"){
        schema = yup.object().shape(Medicine);
        initiValue = {
            name: "",
            price: "",
            quantity: "",
            expiry: ""
        }

        const formik = useFormik({
            initialValues : initiValue,
            validationSchema: schema,
            onSubmit: (values, { resetForm }) => {
                // alert(JSON.stringify(values, null, 2));
                
                if(useType === "Login"){
                    console.log("Successfully Sumbit");
                }
                resetForm()
            },
        });
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let med_Data = {
        id: Math.floor(Math.random() * 1000),
        name,
        price,
        quantity,
        expiry
    }

    const handleSubmit = () => {
        localStorage.setItem("medicine", JSON.stringify(med_Data));
        handleClose();
        setName();
        setPrice();
        setQuantity();
        setExpiry();
    }


    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Medicines
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add Medicine</DialogTitle>
                <DialogContent>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        name='name'
                        label="Medicine Name"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        name='price'
                        label="Medicine Price"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        name='quantity'
                        label="Medicine Quantity"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        name='expiry'
                        label="Medicine Expiry"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setExpiry(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Medicine;