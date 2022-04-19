import vue from 'vue'
import vuex from 'vuex'
import state from './states.js'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters'
import user from './modules/user'
vue.use(vuex);
export default new vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules:{
    user
  }
})
// export default store
// import Vue from 'vue'
// import Vuex from 'vuex'
// import * as getters from './getters' // 导入响应的模块，*相当于引入了这个组件下所有导出的事例
// import * as actions from './actions'
// import * as mutations from './mutations'
// import * as modules from './modules'
// import user from './module/user'
// import app from './module/app'

// Vue.use(Vuex)
// 首先声明一个需要全局维护的状态 state,比如 我这里举例的resturantName
// const state = {
//     token:"",
    // resturantName: '飞歌餐馆' // 默认值
    // id: xxx  如果还有全局状态也可以在这里添加
    // name:xxx
    // 存储token
    // Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
// }
  
// 注册上面引入的各大模块
// const store = new Vuex.Store({
//     state,    // 共同维护的一个状态，state里面可以是很多个全局状态
//     getters,  // 获取数据并渲染
//     actions,  // 数据的异步操作
//   mutations,  // 处理数据的唯一途径，state的改变或赋值只能在这里
//   // modules:{a:moduleA}
// })
  
// export default store  // 导出store并在 main.js中引用注册。



// import Vue from "vue";
// import Vuex from "vuex";
// 
// Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {},
//   mutations: {},
//   actions: {},
//   modules: {}
// });

// export default new Vuex.Store({
// 	state: {
// 		projects:[],
// 		//
// 	},
// 	mutations: {
// 		//
// 		SET_PROJECT_LIST: (state, { list }) => {
// 		state.projects = list
// 		}

// 	},
// 	getters:{

// 	},
// 	actions: {
// 		// 异步获取
// 		LOAD_PROJECT_LIST: function ({ commit }) {
// 		axios.get('API接口').then((response) => {
// 			commit('SET_PROJECT_LIST', { list: response.data })
// 		}, (err) => {
// 			console.log(err)
// 		})
// 		}
// 		//
// 	},
// 	modules: {
		
// 		// user,
// 		// app
// 	}
// })

// ...mapactions 和 ...mapgetters都是vuex提供的语法糖，在底层已经封装好了，拿来就能用，简化了很多操作。

// 其中...mapActions(['clickAFn']) 相当于this.$store.dispatch('clickAFn'，{参数})，mapActions中只需要指定方法名即可，参数省略。

// ...mapGetters(['resturantName'])相当于this.$store.getters.resturantName


// import {mapActions, mapGetters} from 'vuex'    引入
// methods:{
// 	...mapActions( // 语法糖
// 		['modifyAName'] // 相当于this.$store.dispatch('modifyName'),提交这个方法
// 	),
// 	trunToB () {
// 		this.$router.push({path: '/componentsB'}) // 路由跳转到B
// 	}
// },
// computed: {
// 	...mapGetters(['resturantName']) // 动态计算属性，相当于this.$store.getters.resturantName
// }
