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
     "Ο Κωδικός πρέπει να έχει τουλάχιστον 1 μη αριθμητικό χαρακτήρα (και τουλάχιστον 6 χαρακτήρες στο σύνολο)."),

    Phone: yup.string()  //required, min 10, +30, start 2 or 6
    .required("Your phone is required.") //.integer("Το τηλέφωνο πρέπει να είναι ακέραιος αριθμός."),
    .matches ("^[0-9]*$", "Το τηλέφωνο πρέπει να περιλαμβάνει μόνο αριθμούς.") //.positive("Το τηλέφωνο πρέπει να είναι θετικός αριθμός."),
    .min(10,"Your phone must include at least 10 digits and may include your country code")
    .max(13,"Your phone number including the country code must be up to 13 digits.")
});


export {RegistrationSchema};