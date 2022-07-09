<template>
    <v-container>
        <v-container align="center">
            <v-btn @click="workingMode=!workingMode">toggle</v-btn>
        </v-container>

        <p v-if="workingMode">作業モード</p>
        <p v-else>休憩モード</p>

        <Timer_ v-if="workingMode" :isWorkingMode="workingMode"></Timer_>
        <Timer_ v-else :isWorkingMode="workingMode"></Timer_>

        <Preset></Preset>
    </v-container>
</template>
<script>
    import Timer_ from './Timer/TimerTimer.vue'
    import Preset from './Timer/TimerPreset.vue'

    import { mapMutations } from 'vuex'

    export default {
        components: {
            Timer_,
            Preset,
        },
        data: () => ({
            workingMode: true,
        }),
    }
</script>