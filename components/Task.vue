<template>
    <v-container id="task">
        <h2>Tasks</h2>

        <v-form>
            <v-text-field label="title" v-model="title"></v-text-field>
            <v-text-field label="time" v-model="time" type="number"></v-text-field>
        </v-form>
        <v-btn @click="addTask"><v-icon> mdi-plus </v-icon></v-btn>        

        <v-list outlined>
            <v-list-item v-for="task in tasks" :key="task.id">
                <v-list-item-content>
                    <v-btn @click="deleteTask(task.id)"><v-icon>mdi-delete</v-icon></v-btn>
                    <v-list-item-title> {{task.title}} </v-list-item-title>
                    <p> 予定時間（分）： {{task.time}}</p>
                    <v-checkbox></v-checkbox>
                </v-list-item-content>
            </v-list-item>
        </v-list>

    </v-container>
</template>

<script>
    import axios from 'axios';

    export default {
        data: () => ({
            title: "",
            time: 0,
            tasks: [
                {id: 0, title: "take a nap", time: 30},
                {id: 1, title: "have a lunch", time: 15},
                {id: 2, title: "make an app", time: 300},
            ]
        }),
        methods: {
            addTask: function(){
                const url = "http://localhost:1323/addTask";
                const data = {title: this.title, time: parseInt(this.time)};
                console.log(data);
                axios.post(url, data).then(res => console.log(res));
                this.tasks.push({
                    id: this.tasks.length+1,
                    title: this.title,
                    time: this.time,
                });
            },
            deleteTask: function(id){
                // axios.post()
                this.tasks = this.tasks.filter( task => task.id != id );
            }
        },
    }
</script>

<style>
    #task{
        border: 3px solid black;
    }
</style>