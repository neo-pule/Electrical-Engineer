import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

admin.initializeApp();

exports.addAdmin = functions.https.onCall((data, context)=>{
    return admin.auth().getUserByEmail(data.email).then(user =>{
        return admin.auth().setCustomUserClaims(user.uid,{
            admin: true
        })
    }).then(()=>{
        return {
            message: `Success! ${data.email} has been made an Admin`
        }
    }).catch(err =>{
        return err;
    });
});

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
