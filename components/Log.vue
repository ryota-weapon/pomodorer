<template>
    <v-container class="px-6">
        <h2> 作業ログ </h2>
        
        <p v-if="logs.length==0"> タスクをこなしましょう！ </p>

        <v-list class="py-0" max-height="960">
            <v-list-item-content v-for="log in logs" :key="log.id" class="py-1">
                <v-card elevation="2" class="py-0" color="#F8F5F5">
                    <v-list-item-title>
                        {{ log.startTime }} ~ {{ log.endTime }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        終わらせたタスク
                    </v-list-item-subtitle>
                    
                    <v-list color="#F8F5F5">
                        <v-list-item-content v-for="taskId in log.taskIds">
                            <p>{{ taskId }}</p>
                        </v-list-item-content>
                    </v-list>
                </v-card>
            </v-list-item-content>
        </v-list>
    </v-container>
</template>

<script>
    export default ({
        data: () => ({
            logs: [
                {
                    id: 0,
                    startTime: "10:00",
                    endTime:  "10:25",
                    taskIds: [1,2,5],
                },
                {
                    id: 1,
                    startTime: "10:30",
                    endTime:  "10:55",
                    taskIds: [3,6],
                },
                {
                    id: 2,
                    startTime: "11:00",
                    endTime:  "11:40",
                    taskIds: [7],
                },
                {
                    id: 3,
                    startTime: "11:50",
                    endTime:  "12:30",
                    taskIds: [8,9],
                },
            ]
        }),
        methods: {

        }
    })
</script>