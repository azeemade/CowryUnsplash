import { createStore } from 'vuex'

const store = createStore({
    state(){
        return {
            id: null,
            query: ''
        }
    },

    mutations: {
        add_id(state, id){
            state.id = id
        },

        remove_id(state){
            state.id = null
        },

        add_query(state, query){
            state.query = query
        },
    },

    getters:{
        id: state =>{
            return state.id
        },
        query: state =>{
            return state.query
        }
    }

})

export default store
