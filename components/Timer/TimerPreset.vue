<template>
    <div id="preset">
        <v-expansion-panels><v-expansion-panel>

            <v-expansion-panel-header>Preset</v-expansion-panel-header>
            <v-expansion-panel-content>
                
                <v-container>
                    <v-form>
                        <v-text-field v-model="title" label="タイトル"></v-text-field>
                        <v-text-field v-model="workTime" label="作業時間(分)"></v-text-field>
                        <v-text-field v-model="restTime" label="休憩時間(分)"></v-text-field>
                        <v-text-field v-model="rounds" label="ラウンド数"></v-text-field>
                        <v-btn @click="addPreset">登録</v-btn>
                    </v-form>
                </v-container>
                <v-list>
                    <v-list-item v-for="preset in presets" :key="preset.id">
                        <v-list-item-content>
                            <v-list-item-title>
                                <v-btn text outlined>{{preset.title}}</v-btn>
                            </v-list-item-title>
                            <p> {{preset.workTime}} - {{preset.restTime}} x {{preset.rounds}} </p>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-expansion-panel-content>
        </v-expansion-panel></v-expansion-panels>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        data: () => ({
            title: "",
            workTime: 25,
            restTime: 5,
            rounds: 4,
            presets: [
                {id:0, title: "defaulta", workTime: 25, restTime: 5, rounds: 4},
            ]
        }),
        methods: {
            addPreset: function(){
                //ajax
                axios.get("https://api.coindesk.com/v1/bpi/currentprice.json").then(response => console.log(response));

                //inMemory
                this.presets.push({
                    id: this.presets.length+1,
                    title: this.title,
                    workTime: this.workTime,
                    restTime: this.restTime,
                    rounds: this.rounds,
                })

                //empty
            },
        },
    }
</script>

<style>
    #preset{
        border: solid 3px black;
    }
</style>