<template>
    <v-container>
        <v-row>
            <v-col cols="6" align="center">
                <v-form>
                    <v-text-field label="タイトル" v-model="title"></v-text-field>
                    <v-text-field label="要する時間(分)" v-model="time" type="number"></v-text-field>
                </v-form>
                <v-btn width="90%" @click="addTask"><v-icon> mdi-plus </v-icon></v-btn>        
            </v-col>
    
            <v-col cols="6">
                    <p style="font-weight: bold">タスク一覧</p>
                    <!-- <v-list color="#B1EAF6" > -->
                    <v-list color="" max-height="400" height="400" class="overflow-y-auto">
                        <p v-if="tasks.length==0">フォームからタスクを追加してください。</p>
                        <v-list-item v-for="task in tasks" :key="task.id" class="px-1">
                            <v-card width="100%" elevation="3" class="px-2">
                                <v-list-item-content>
                                    <v-row justify="center">
                                        <v-col>
                                            <v-list-item-title> {{task.title? task.title : "（タイトルなし）"}} </v-list-item-title>
                                            <v-list-item-subtitle> 予定時間（分）： {{task.time}}</v-list-item-subtitle>
                                        </v-col>
        
                                        <v-spacer></v-spacer>
                                        
                                        <v-col cols="1">
                                            <v-checkbox v-model="task.isDone"></v-checkbox>
                                        </v-col>
                                        <v-col cols="1">
                                            <v-btn class="px-0 my-4" rounded x-small @click="editTask(task.id)" ><v-icon small>mdi-pencil</v-icon></v-btn>
                                        </v-col>
                                        <v-col cols="1">
                                            <v-btn class="px-0 my-4" rounded x-small @click="deleteTask(task.id)" ><v-icon small>mdi-delete</v-icon></v-btn>
                                        </v-col>
                                    </v-row>
                                </v-list-item-content>
                            </v-card>

                        </v-list-item>
                    </v-list>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import axios from 'axios';

    export default {
        data: () => ({
            title: "",
            time: 0,
            tasks: [
                {id: 0, title: "take a nap", time: 30, isDone: false},
                {id: 1, title: "have a lunch", time: 15, isDone: true},
                {id: 2, title: "make an app", time: 300, isDone: false},
                {id: 3, title: "take a nap", time: 30, isDone: false},
                {id: 4, title: "have a lunch", time: 15, isDone: true},
                {id: 5, title: "make an app", time: 300, isDone: false},
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
            },
            editTask: function(id) {
                return;
            }
        },
    }
</script>

<style>
    /* #task{
        border: 3px solid black;
    } */
</style>