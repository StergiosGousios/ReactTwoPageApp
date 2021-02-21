import React, { useState, useEffect } from 'react';
import styles from './ContactForm.module.css';
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const RegistrationSchema = yup.object().shape({
    Email: yup.string()
    .required("Your email is required.")
    .email("Please enter a valid email address."), 


    Password: yup.string() //required, min 9, at least 1 : 0-9, a-z , A-Z , symbol
    .required("Your password is required.")
    .min(9, "Your password must include at least 9 characters .")
    .matches("[a-zA-Z0-9α-ωΑ-Ωά-ώΆ-Ώ]*[a-zA-Zα-ωΑ-Ωά-ώΆ-Ώ][a-zA-Z0-9α-ωΑ-Ωά-ώΆ-Ώ]*$",
    "The password must contain at least one number, one capital letter, one symbol and one low case letter."),

    //.matches("(.*[a-z].*)(.*[A-Z].*)(.*[0123456789].*)(.*[-+_!@#$%^&*.,?].*)",
    //.matches("([0123456789])(?=.*[a-z])(?=.*[A-Z])[-+_!@#$%^&*.,?]",
    // .matches("[a-zA-Z0-9α-ωΑ-Ωά-ώΆ-Ώ]*[a-zA-Zα-ωΑ-Ωά-ώΆ-Ώ][a-zA-Z0-9α-ωΑ-Ωά-ώΆ-Ώ]*$",
    //  "Ο Κωδικός πρέπει να έχει τουλάχιστον 1 μη αριθμητικό χαρακτήρα (και τουλάχιστον 6 χαρακτήρες στο σύνολο)."),

    Phone: yup.string()  //required, min 10, +30, start 2 or 6
    .required("Your phone is required.") //.integer("Το τηλέφωνο πρέπει να είναι ακέραιος αριθμός."),
    //.matches ("^[0-9]*$", "Το τηλέφωνο πρέπει να περιλαμβάνει μόνο αριθμούς.") //.positive("Το τηλέφωνο πρέπει να είναι θετικός αριθμός."),
    .min(10,"Your phone must include at least 10 digits and may include your country code")
    .max(13,"Your phone number including the country code must be up to 13 digits.")
});

const ContactForm = ({formText, formLabels, buttonText}) => {
    const {register, handleSubmit, reset , control,errors} = useForm({
        resolver: yupResolver(RegistrationSchema), //load our schema from YupValidationSchema.js file        
    });

    const MyOnSubmit = (data) => {
        alert("Form data are valid !");
    }

    const MyOnError= (data) => {
        console.log("MyOnError - data is : ",data);
        console.log("MyOnError - errors is : ",errors);
       }
    
    return (
        <div className={styles.FormContainer}>
            <h3>{formText}</h3>
            <p className={styles.grayTitle}>We work with ecosystem leaders, 
               corporations and startups worldwide. How can we help you ?</p>
            <div >
                <form className={styles.formStyle} onSubmit={ handleSubmit(MyOnSubmit, MyOnError) }>
                    <input 
                        className={styles.formStyle} 
                        ref={register}
                        name="Phone" 
                        placeholder={formLabels[0]} 
                    />
                     {errors.Phone && <p className={styles.errorMessage}>{errors.Phone?.message}</p>}
                    <input
                        className={styles.formStyle} 
                        ref={register} 
                        name="Email" 
                        placeholder={formLabels[1]} 
                        type="email" 
                    />
                    {errors.Email && <p className={styles.errorMessage}>{errors.Email?.message}</p>}
                    <input 
                        className={styles.formStyle} 
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
