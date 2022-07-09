<template>
    <v-container id="timer">
        <h2>Timer</h2>
        <v-btn @click="startTimer"> {{ startText }} </v-btn>
        <v-btn @click="stopTimer">Stop</v-btn>
        <p v-if="isWorking"> 作業中 </p>
        <p v-else> 休憩中 </p>
        <p> {{ formattedTime }} </p>

    </v-container>
</template>

<script>
    function soundBeep() {
        var ctx = new AudioContext();
        var oscillator = ctx.createOscillator();
        oscillator.type = 'sine';
        oscillator.frequency.value = 440;
        oscillator.connect(ctx.destination);
        oscillator.start();
        setTimeout(()=>{
            oscillator.stop();
        }, 2000);
    }
    const timerInterval = 100;
    export default {
        data: () => ({
            isStarted: false,
            isWorking: false,
            timerId: -1,
        }),
        props: [
            "isWorkingMode",
        ],
        methods: {
            startTimer: function(){
                if (this.isWorking) return;
                this.isWorking = true;
                this.isStarted = true;
                this.timerId = setInterval(()=>{
                    this.$store.commit("timer/decreaceTime", {
                        isWorkingMode: this.isWorkingMode,
                        interval: timerInterval,
                    });
                }, timerInterval);
                
            },
            stopTimer: function(){
                this.isWorking = false;
                clearInterval(this.timerId);
            },

            decreaseTime: function() {
                if (this.leftMilliSeconds > 0){
                    this.leftMilliSeconds -= timerInterval
                }else{
                    this.stopTimer();
                    soundBeep();
                }
            }
        },
        computed: {
            startText: function(){
                return this.isStarted? "Restart" : "Start";
            },
            formattedTime: function(){
                let leftMilliSeconds;
                if (this.isWorkingMode){
                    leftMilliSeconds = this.$store.state.timer.workTime;
                }else {
                    leftMilliSeconds = this.$store.state.timer.restTime;
                }

                const m = Math.floor(leftMilliSeconds /1000 / 60);
                const s = Math.floor(leftMilliSeconds /1000 % 60);
                
                return `${m}:${s<10? "0": ""}${s}`
            }
        },
    }

</script>

<style>
    #timer{
        border: solid 5px black;
    }
</style>