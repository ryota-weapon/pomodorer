<template>
    <v-container class="py-6">
        <!-- <v-container align="center">
            <v-btn @click="workingMode=!workingMode">toggle</v-btn>
        </v-container> -->
        <v-row justify="center">
            <v-col cols="2">
                <v-btn>
                    作業モード
                </v-btn>
            </v-col>
            <v-col cols="2">
                <v-btn>
                    休憩モード
                </v-btn>
            </v-col>
        </v-row>

        <!-- <p v-if="workingMode">作業モード</p>
        <p v-else>休憩モード</p> -->

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