//new form - formik
import React, { useState, useEffect } from 'react';
import styles from './ContactForm.module.css';
//import { useFormik } from 'formik';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {RegistrationSchema} from './YupValidationSchema';


const MyRegistrationSchema = Yup.object().shape({
    email: Yup.string()
    .required("Your email is required.")
    .email("Please enter a valid email address."), 

    password: Yup.string() //required, min 9, at least 1 : 0-9, a-z , A-Z , symbol
    .required("Your password is required.")
        .min(9, "Your password must include at least 9 characters .")
        //(ο ένας μη αριθμητικός)
        .matches("[a-zA-Z0-9α-ωΑ-Ωά-ώΆ-Ώ]*[a-zA-Zα-ωΑ-Ωά-ώΆ-Ώ][a-zA-Z0-9α-ωΑ-Ωά-ώΆ-Ώ]*$",
        "Ο Κωδικός πρέπει να έχει τουλάχιστον 1 μη αριθμητικό χαρακτήρα (και τουλάχιστον 6 χαρακτήρες στο σύνολο)."),

    telephone: Yup.string()  //required, min 10, +30, start 2 or 6
    .required("Your phone is required.")
    //.integer("Το τηλέφωνο πρέπει να είναι ακέραιος αριθμός."),
    .matches ("^[0-9]*$", "Το τηλέφωνο πρέπει να περιλαμβάνει μόνο αριθμούς.")
    //.positive("Το τηλέφωνο πρέπει να είναι θετικός αριθμός."),
    .min(10,"Your phone must include at least 10 digits and may include your country code")
    .max(13,"Your phone number including the country code must be up to 13 digits."),

    });

// const formik = useFormik({
//     initialValues: {
//         Phone: '',
//         Email: '',
//         Password: '',
//     },
//     validationSchema={MyRegistrationSchema},
//     onSubmit: values => {
//         setTimeout(() => {
//             alert(JSON.stringify(values, null, 2));
//         }, 500);
//     },
//   });

const ContactForm = ({formText, formLabels, buttonText}) => {
    
    return (
        <div className={styles.FormContainer}>
            <h3>{formText}</h3>
            <p className={styles.grayTitle}>We work with ecosystem leaders, 
               corporations and startups worldwide. How can we help you ?</p>
            <div >
                <Formik
                    initialValues={{
                        Phone: '',
                        Email: '',
                        Password: '',
                    }}
                    validationSchema={RegistrationSchema}
                    onSubmit={values => {
                        // same shape as initial values
                        console.log(values);
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <Field 
                                name="Phone" 
                                placeholder={formLabels[0]}
                            />
                            {errors.Phone && touched.Phone ? (
                                <div>{errors.Phone}</div>
                            ) : null}
                           {/* <input 
                                
                                name="Phone" 
                                placeholder={formLabels[0]} 
                                onChange={formik.handleChange}
                                value={formik.values.Phone}
                            />
                             <p> {errors.telephone?.message} </p> */}
                            
                            <Field 
                                type="email" 
                                name="Email" 
                                placeholder={formLabels[1]} 
                            />
                            {errors.Email && touched.Email ? (
                                <div>{errors.Email}</div>
                            ) : null}
                            {/*<input 
                                type="email" 
                                name="Email" 
                                placeholder={formLabels[1]} 
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                             {errors.email?.message} */}



                            <Field 
                                name="Password"
                                placeholder={formLabels[2]}
                            />
                            {errors.Password && touched.Password ? (
                                <div>{errors.Password}</div>
                            ) : null}
                            {/*
                            <input 
                                name="Password"
                                placeholder={formLabels[2]}
                                onChange={formik.handleChange}
                                value={formik.values.Password}  
                            />
                             <p> {errors.password?.message} </p> */}

                            <button type="submit">Submit</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default ContactForm ;
