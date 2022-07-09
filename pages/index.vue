<template>
    <v-container>
        <google-calendar></google-calendar>
        <Timer></Timer>
        <Task></Task>
    </v-container>
</template>

<script>
    import Timer from '../components/Timer.vue'
    import Task from '../components/Task.vue'
    import GoogleCalendar from '../components/GoogleCalendar.vue'

    export default {
        components: {
            Timer,
            Task,
            GoogleCalendar,
}
    }
</script>

<style>
</style>