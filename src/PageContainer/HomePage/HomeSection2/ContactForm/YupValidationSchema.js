import { yupResolver } from '@hookform/resolvers/yup';
//var invariant = require('invariant')
import * as Yup from 'yup';

// Yup.addMethod(Yup.object, 'atLeastOneOf', function(list) {
//   return this.test({
//     name: 'atLeastOneOf',
//     message: 'must have at least one of these keys: ...',
//     exclusive: true,
//     params: { keys: list.join(', ') },
//     test: value => value == null || list.some(f => value[f] != null)
//   })
// })

// Yup.addMethod(Yup.object, 'atLeastOneRequired', function atLeastOneRequired(list, message) {
//   invariant(list.every(field => this.fields[field]), 'All required fields should be defined before calling atLeastOneRequired');
//   return this.shape(list.reduce((acc, field) => ({
//     ...acc,
//     [field]: this.fields[field].when(without(list, field), {
//       is: (...values) => !values.some(item => item),
//       then: this.fields[field].required(message),
//     }),
//   }), {}), list.reduce((acc, item, idx, all) => [...acc, ...all.slice(idx + 1).map(i => [item, i])], []));
// });

const ExamineeSchema = Yup.object().shape({
   //Schema for Questionnaire 1 :
  name: Yup.string()
	.required("Το Όνομα δεν πρέπει να είναι κενό.")
  .matches("^[ A-Za-zα-ωΑ-Ωά-ώΆ-Ώ]+$","Στο Όνομα επιτρέπονται μόνο μη αριθμητικοί χαρακτήρες."),

surName: Yup.string()
	.required("Το Επώνυμο δεν πρέπει να είναι κενό.")
  .matches("^[ A-Za-zα-ωΑ-Ωά-ώΆ-Ώ]+$","Στο Επώνυμο επιτρέπονται μόνο μη αριθμητικοί χαρακτήρες."),

 email: Yup.string()       
  .required("Το email δεν πρέπει να είναι κενό.")
  .email("Παρακαλώ εισάγετε ένα email με σωστή μορφή."),   

  password: Yup.string() // CHECK !
  //.required("Ο Κωδικός δεν πρέπει να είναι κενό.")
   .min(6, "Ο Κωδικός πρέπει να έχει τουλάχιστον 6 χαρακτήρες (ο ένας μη αριθμητικός).")
   .matches("[a-zA-Z0-9α-ωΑ-Ωά-ώΆ-Ώ]*[a-zA-Zα-ωΑ-Ωά-ώΆ-Ώ][a-zA-Z0-9α-ωΑ-Ωά-ώΆ-Ώ]*$",
        "Ο Κωδικός πρέπει να έχει τουλάχιστον 1 μη αριθμητικό χαρακτήρα (και τουλάχιστον 6 χαρακτήρες στο σύνολο)."),
 
  telephone: Yup.string()  // CHECK !
  .required("Το τηλέφωνο δεν πρέπει να είναι κενό.")
  //.integer("Το τηλέφωνο πρέπει να είναι ακέραιος αριθμός."),
  .matches ("^[0-9]*$", "Το τηλέφωνο πρέπει να περιλαμβάνει μόνο αριθμούς.")
  //.positive("Το τηλέφωνο πρέπει να είναι θετικός αριθμός."),
  .min(10,"Το τηλέφωνο πρέπει να περιέχει τουλάχιστον 10 ψηφία."),
  
  confirmPassword: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Ο Κωδικός Πρόσβασης δεν είναι ίδιος με την Επιβεβαίωση Κωδικού Πρόσβασης'),

  address:  Yup.string()
	.required("Η Διεύθυνση δεν πρέπει να είναι κενή.")
  .matches("[ a-zA-Zα-ωΑ-Ωά-ώΆ-Ώ ]+[0-9]*$",
    "Η Διεύθυνση αποτελείται από όνομα δρόμου και μετά, προεραιτικά αριθμό."),

  City:  Yup.string()
  .required("Η Πόλη δεν πρέπει να είναι κενή.")
  .matches("^[ A-Za-zα-ωΑ-Ωά-ώΆ-Ώ]+$",
       "Στην Πόλη επιτρέπονται μόνο μη αριθμητικοί χαρακτήρες."),
  
  PostalCode: Yup.string() 
    .required("Ο Ταχυδρομικός Κώδικας δεν πρέπει να είναι κενός.")
    //.integer("Στον Ταχυδρομικό Κώδικα επιτρέπονται μόνο αριθμοί (5 ψηφίων).")
    .matches ("^[0-9]*$", "Ο Ταχυδρομικός Κώδικας πρέπει να περιλαμβάνει μόνο αριθμούς.")
    .min(5,"Ο Ταχυδρομικός Κώδικας πρέπει να είναι 5-ψήφιος αριθμός.")
    .max(5,"Ο Ταχυδρομικός Κώδικας πρέπει να είναι 5-ψήφιος αριθμός."),


    NewIdDocument: Yup.string() 
    .min(6,"Το Έγγραφο Ταυτοποίησης πρέπει να έχει απο 6 έως 12 χαρακτήρες.")
    .max(12,"Το Έγγραφο Ταυτοποίησης πρέπει να έχει απο 6 έως 12 χαρακτήρες."),

    // Amka: Yup.string().ensure()
    // .when (["PassportNumber", "IdentityNumber"], {
    //   is : (PassportNumber,IdentityNumber) => !PassportNumber && !IdentityNumber, //are both empty ?
    //   //(PassportNumber)=> !PassportNumber || PassportNumber.length === 1,
    //   then : Yup.string()
    //   .required("Απαιτείται ενα απο τα : ΑΜΚΑ, Αρ Ταυτόττητας, Αρ Διαβατηρίου ")
    //   .matches("^(0[1-9]|[12][0-9]|3[01])+(0[123456789]|1[012])+[0-9]{7}$",
    //    "Το AMKA πρέπει να είναι 11-ψήφιος αριθμός που τα πρώτα 6 ψηφία είναι η ημερομηνία γέννησής σας, στη μορφή DDMMYY." ),
    //   // .min(11,"Ο AMKA πρέπει να είναι 11-ψήφιος αριθμός.")
    //   // .max(11,"Ο AMKA πρέπει να είναι 11-ψήφιος αριθμός."),
    //   otherwise: Yup.string().notRequired()
    // }),

  // PassportNumber:  Yup.string().ensure()
  // .when (["Amka","IdentityNumber"], {
  //   is : (Amka,IdentityNumber) => !Amka && !IdentityNumber,
  //   then : Yup.string()
  //  .required("Απαιτείται ενα απο τα : ΑΜΚΑ, Αρ Ταυτόττητας, Αρ Διαβατηρίου ")
  //  .matches("[ a-zA-Zα-ωΑ-Ωά-ώΆ-Ώ]+[0-9]+$",
  //     "Ο Αριθμός διαβατηρίου πρέπει να περιέχει γράμματα (ή και κενό) και ψηφία."),
  // }),

  // IdentityNumber : Yup.string().ensure()
  // .when (["Amka","PassportNumber"], {
  // is : (Amka,PassportNumber) => !Amka && !PassportNumber,
  // then : Yup.string()
  // .required("Απαιτείται ενα απο τα : ΑΜΚΑ, Αρ Ταυτόττητας, Αρ Διαβατηρίου ")
  // //.notRequired()
  // .matches("^[ a-zA-Zα-ωΑ-Ω]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+$",
  //      "Ο Αριθμός ταυτότητας πρέπει να περιέχει γράμματα (ή και κενό) και 6 ψηφία."),
  // }), 

},
[
  ["Amka","PassportNumber"],
  ["Amka","IdentityNumber"],
  ["PassportNumber","Amka"],
  ["PassportNumber","IdentityNumber"],
  ["IdentityNumber","Amka"],
  ["IdentityNumber","PassportNumber"],
 ]
);
//.atLeastOneRequired(['Amka','PassportNumber', 'IdentityNumber'])
//.atLeastOneOf(['Amka','PassportNumber', 'IdentityNumber'])

const QuestionnareSchema = Yup.object().shape({
  //Schema for Questionnaire 2 :
  OtherSymptoms : Yup.string()    //conditional !
      .notRequired()
      .matches("^[ A-Za-zα-ωΑ-Ωά-ώΆ-Ώ]*$","Στα \"Άλλα Συμπτώματα\" επιτρέπονται μόνο μη αριθμητικοί χαρακτήρες."),

  // OtherSymptoms : Yup.string()    //conditional !
  // .notRequired()
  // .shape({ 
  //   test : Yup.string() 
  //    .matches("^[ A-Za-zα-ωΑ-Ωά-ώΆ-Ώ]+$","Επιτρέπονται μόνο μη αριθμητικοί χαρακτήρες."),
  // }),

  VisitedCountryName: Yup.string() 
    .matches("^[ A-Za-zα-ωΑ-Ωά-ώΆ-Ώ]*$","Στην \"Χώρα που επισκεφτήκατε\" επιτρέπονται μόνο μη αριθμητικοί χαρακτήρες."),

    InfectedContactName: Yup.string() 
    .matches("^[ A-Za-zα-ωΑ-Ωά-ώΆ-Ώ]*$","Στο \"Ονοματεπώνυμο ύποπτης επαφής\" επιτρέπονται μόνο μη αριθμητικοί χαρακτήρες."),
 
    MedicalPrescriptionName: Yup.string() 
    .matches("^[ A-Za-zα-ωΑ-Ωά-ώΆ-Ώ]*$","Στην \"φαρμακευτική αγωγή\"επιτρέπονται μόνο μη αριθμητικοί χαρακτήρες."),
}
);

const RegistrationSchema = Yup.object().shape({

    email: Yup.string()
    //.required("Your email is required.")
    .email("Please enter a valid email address."), 

    // password: Yup.string() //required, min 9, at least 1 : 0-9, a-z , A-Z , symbol
    // .required("Your password is required.")
    //  .min(9, "Your password must include at least 9 characters .")
    //   //(ο ένας μη αριθμητικός)
    //  .matches("[a-zA-Z0-9α-ωΑ-Ωά-ώΆ-Ώ]*[a-zA-Zα-ωΑ-Ωά-ώΆ-Ώ][a-zA-Z0-9α-ωΑ-Ωά-ώΆ-Ώ]*$",
    //  "Ο Κωδικός πρέπει να έχει τουλάχιστον 1 μη αριθμητικό χαρακτήρα (και τουλάχιστον 6 χαρακτήρες στο σύνολο)."),


    // telephone: Yup.string()  //required, min 10, +30, start 2 or 6
    // .required("Your phone is required.")
    // //.integer("Το τηλέφωνο πρέπει να είναι ακέραιος αριθμός."),
    // .matches ("^[0-9]*$", "Το τηλέφωνο πρέπει να περιλαμβάνει μόνο αριθμούς.")
    // //.positive("Το τηλέφωνο πρέπει να είναι θετικός αριθμός."),
    // .min(10,"Your phone must include at least 10 digits and may include your country code")
    // .max(13,"Your phone number including the country code must be up to 13 digits."),

});


export {ExamineeSchema, QuestionnareSchema,RegistrationSchema};