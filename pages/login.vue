<template>
    <v-container align="center">
        <h2>Login</h2>
        <p>This app only supports for sign-in with google</p>
        <p>You can use most functions without signing in</p>
        <v-btn @click="signUpWithGoogle">sign-up with Google</v-btn>
    </v-container>
</template>

<script>
    // import {auth} from '../plugins/firebase'
    // import { signInWithPopup, GoogleAuthProvider} from "firebase/auth"

    // const auth = firebase.auth();

    export default {
        methods: {
            signUpWithGoogle: function() {
                // const provider = new GoogleAuthProvider();
                // signInWithPopup(auth, provider).then(result => {
                //     console.log(result)
                // });
                window.alert("login");
            }
        }
    }
</script>