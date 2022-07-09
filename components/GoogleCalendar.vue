<template>
    <v-container id="calendar" outline>
        <h2>Google Calendar</h2>
        <v-btn @click="registerTaskOnCalendar"><v-icon> mdi-calendar </v-icon></v-btn>
        <p>show other people that you're working on these tasks with just a click!</p>
    </v-container>
</template>

<script>
    import axios from 'axios'

    export default {
        data: () => ({
        }),
        methods: {
            registerTaskOnCalendar: function(){
                const postData = {};
                axios.post("http://localhost:1323/registerCalendar", postData).then(res =>console.log(res))
                return;
            }
        }
    }
</script>

<style>
    #calendar{
        border: solid 3px black;
    }
</style>