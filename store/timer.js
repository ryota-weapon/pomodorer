export const state = () => ({
    workTime: 25*60*1000,
    restTime: 5*60*1000,
})

export const mutations = {
    decreaceTime(state, payload) {
        if (payload.isWorkingMode) {
            state.workTime -= payload.interval;
        }else {
            state.restTime -= payload.interval;
        }
    },

    setWorkTime(state, val) {
        state.workTime = val;
    },

    setRestTime(state, val) {
        state.restTime = val;
    }
}