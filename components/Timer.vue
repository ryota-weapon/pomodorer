<template>
    <v-container>
        <v-container align="center">
            <v-btn-toggle rounded change="workingMode=!workingMode">
                <v-btn >作業</v-btn>
                <v-btn default>休憩</v-btn>
            </v-btn-toggle>
        </v-container>

        <p v-if="workingMode">作業モード</p>
        <p v-else>休憩モード</p>

        <Timer_ v-if="workingMode" ></Timer_>
        <Timer_ v-else ></Timer_>
        <!-- <Timer v-if="workingMode" :left-milli-seconds="workingTime"></Timer>
        <Timer v-else :left-milli-seconds="restTime"></Timer> -->

        <Preset></Preset>
    </v-container>
</template>
<script>
    import Timer_ from './Timer/TimerTimer.vue'
    import Preset from './Timer/TimerPreset.vue'

    export default {
        components: {
            Timer_,
            Preset,
        },
        data: () => ({
            workingMode: true,
            workingTime: 25*60*1000,
            restTime: 5*60*1000,
        }),
    }
</script>