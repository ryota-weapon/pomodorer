<template>
    <v-expansion-panels><v-expansion-panel>

        <v-expansion-panel-header color="#B1EAF6">プリセット</v-expansion-panel-header>
        <v-expansion-panel-content color="#B1EAF6">
            <v-form>
                <v-row>
                    <v-col>
                        <v-text-field v-model="title" label="タイトル"></v-text-field>
                        <v-text-field v-model="rounds" label="ラウンド数"></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field v-model="workTime" label="作業時間(分)" type="number"></v-text-field>
                        <v-text-field v-model="restTime" label="休憩時間(分)" type="number"></v-text-field>
                    </v-col>
                </v-row>
                <v-btn @click="addPreset">登録</v-btn>
            </v-form>

            <v-list color="#B1EAF6">
                <v-list-item v-for="preset in presets" :key="preset.id">
                    <v-card width="100%" @click="setPreset(preset.id)">
                        <v-list-item-content>
                            <v-list-item-title>{{preset.title}}</v-list-item-title>
                            <v-list-item-subtitle> {{preset.workTime}} - {{preset.restTime}} x {{preset.rounds}} </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-card>
                </v-list-item>
            </v-list>
        </v-expansion-panel-content>
    </v-expansion-panel></v-expansion-panels>
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
                    id: this.presets.length,
                    title: this.title,
                    workTime: this.workTime,
                    restTime: this.restTime,
                    rounds: this.rounds,
                })
                //empty
            },

            setPreset: function(id) {
                let p;
                for (let i=0; i < this.presets.length; i++) {
                    if (this.presets[i].id == id) {
                        p = this.presets[i];
                        break
                    }
                }
                this.$store.commit("timer/setWorkTime", p.workTime*60*1000);
                this.$store.commit("timer/setRestTime", p.restTime*60*1000);
            }
        },
    }
</script>

<style>
    #preset{
        /* border: solid 3px black; */
        background: #B1EAF6;
    }
</style>