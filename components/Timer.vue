<template>
    <v-container class="py-6">
        <!-- <v-container align="center">
            <v-btn @click="workingMode=!workingMode">toggle</v-btn>
        </v-container> -->
        <v-row>
            <v-col align="center">
                <v-btn-toggle v-model="workingMode">
                    <v-btn :disabled="workingMode==0" >作業モード</v-btn>
                    <v-btn :disabled="workingMode==1" >休憩モード</v-btn>
                </v-btn-toggle>
            </v-col>
        </v-row>

        <!-- <p v-if="workingMode">作業モード</p>
        <p v-else>休憩モード</p> -->

        <Timer_ v-if="workingMode" :isWorkingMode="workingMode==0"></Timer_>
        <Timer_ v-else :isWorkingMode="workingMode==0"></Timer_>

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
            workingMode: 0,
        }),

        computed: {
            shouldDisableWork: function(){
                return !this.workingMode;
            }
        }
    }
</script>