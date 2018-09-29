import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import { groupData,singleData } from '../mock'
// 这里定义初始值
let state = {
    count:10,
    groupInfo:groupData.data,
    singleInfo:singleData.data
};


// 返回改变后的数值
const getters = {
    getCount(context){
        return context.count
    },
    getOdd(context) {
        return context.count % 2 === 0 ? '偶数' : '奇数'
    }
};


const mutations = {
    add(context){
        context.count++
    },
    decrease(context){
        context.count--
    }
};

// 事件触发后的逻辑操作
// 参数为事件函数
const actions = {
    add(add){
        add.commit('add')
    },
    decrease(decrease){
        decrease.commit('decrease')
    },
    oddAdd({commit,state}){
        if (state.count % 2 === 0) {
            commit('add')
        }
    }
};



export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})