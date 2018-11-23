import Vue from 'vue'
//引入vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//引入模板
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Casehome from '../components/home/01Casehome.vue'
import Zone from '../components/home/02Zone.vue'
import Equipment from '../components/home/03Equipment.vue'
import Warn from '../components/home/04Warn.vue'
import Adapter from '../components/home/05Adapter.vue'
import Upkeep from '../components/home/06Upkeep.vue'
import Maintain from '../components/home/07Maintain.vue'
import MaintainRun from '../components/home/08MaintainRun.vue'
import ListCompany from '../components/home/09ListCompany.vue'
import Jurisdiction from '../components/home/10Jurisdiction.vue'
import Usermanage from '../components/home/11Usermanage.vue'
import RoleManage from '../components/home/12RoleManage.vue'
import Personal from '../components/home/13Personal.vue'
import Operation from '../components/home/14Operation.vue'
import Mapdemo from '../components/home/Map.vue'
//配置路由
const routes = [
    {path:'*',redirect:'/home'},
    {path:'/home',component:Home,
        children:[
            {path:'casehome',component:Casehome},
            {path:'zone',component:Zone},
            {path:'equipment',component:Equipment},
            {path:'warn',component:Warn},
            {path:'adapter',component:Adapter},
            {path:'upkeep',component:Upkeep},
            {path:'maintain',component:Maintain},
            {path:'maintainrun',component:MaintainRun},
            {path:'listcompany',component:ListCompany},
            {path:'jurisdiction',component:Jurisdiction},
            {path:'usermanage',component:Usermanage},
            {path:'rolemanage',component:RoleManage},
            {path:'personal',component:Personal},
            {path:'operation',component:Operation},
            {path:'map',component:Mapdemo},
        ]
    },
    {path:'/login',component:Login}, 
]
//实例化路由
const router = new VueRouter({
  routes
})

export default  router;