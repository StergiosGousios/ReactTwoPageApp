import React, { useState, useEffect } from 'react';
import styles from './ContactForm.module.css';
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const RegistrationSchema = yup.object().shape({
    Email: yup.string()
    .required("Your email is required.")
    .email("Please enter a valid email address."), 

    Password: yup.string()
    .required("Your password is required.")
    .min(9, "Your password must include at least 9 characters .")
    .matches("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[!@#$%^&*()]).{8,}$",
    "The password must contain at least one number, one capital letter, one symbol and one low case letter."),

    Phone: yup.string()
    .required("Your phone is required.") 
    .matches("[+30][26][1-9]\\d{8}$|^[26][1-9]\\d{8}$",
    "Your phone must be exactly 10 numerical digits or 13 including your country code (eg +30), starting with 6 or 9"),
});

const ContactForm = ({formText, formLabels, buttonText}) => {
    const {register, handleSubmit, reset , control,errors} = useForm({
        resolver: yupResolver(RegistrationSchema),       
    });

    const MyOnSubmit = (data) => {
        alert("The inserted form data are valid !");
    }

    const MyOnError= (data) => {
    }
    
    return (
        <div className={styles.FormContainer}>
            <h3>{formText}</h3>
            <p className={styles.grayTitle}>We work with ecosystem leaders, 
               corporations and startups worldwide. How can we help you ?</p>
            <div >
                <form className={styles.formStyle} onSubmit={ handleSubmit(MyOnSubmit, MyOnError) }>
                    <input 
                        className={styles.inputs} 
                        ref={register}
                        name="Phone" 
                        placeholder={formLabels[0]} 
                    />
                     {errors.Phone && <p className={styles.errorMessage}>{errors.Phone?.message}</p>}
                    <input
                        className={styles.inputs} 
                        ref={register} 
                        name="Email" 
                        placeholder={formLabels[1]} 
                        type="email" 
                    />
                    {errors.Email && <p className={styles.errorMessage}>{errors.Email?.message}</p>}
                    <input 
                        className={styles.inputs} 
                        ref={register} 
                        name="Password" 
                        placeholder={formLabels[2]}  
                    />
                    {errors.Password && <p className={styles.errorMessage}>{errors.Password?.message}</p>}
                    <button className={styles.SubmitButton}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm ;
