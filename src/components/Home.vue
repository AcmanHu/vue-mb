<template>
    <div id="home">
        <div class="home">
            <v-header class="vheader"></v-header>
            <div class="homeContent">
                <div id="left" class="left">
                    <Menu>
                        <router-link to="/home/casehome">
                            <MenuItem name="1">
                                <Icon type="ios-home" />
                                首页
                            </MenuItem>
                        </router-link>
                        
                        <router-link to="/home/zone">
                            <MenuItem name="2">
                                <Icon type="ios-grid" />
                                分区列表
                            </MenuItem>
                        </router-link>
                        
                        <router-link to="/home/equipment">
                            <MenuItem name="3">
                                <Icon type="ios-list-box" />
                                设备列表
                            </MenuItem>
                        </router-link>
                        
                        <router-link to="/home/warn">
                            <MenuItem name="4">
                                <Icon type="md-document" />
                                报警记录
                            </MenuItem>
                        </router-link>

                        <router-link to="/home/adapter">
                            <MenuItem name="5">
                                <Icon type="md-pie" />
                                适配器
                            </MenuItem>
                        </router-link>
                        
                        <router-link to="/home/map">
                            <MenuItem name="6">
                                <Icon type="md-map" />
                                电子地图
                            </MenuItem>
                        </router-link>
                        
                        <router-link to="/home/upkeep">
                            <MenuItem name="7">
                                <Icon type="md-document" />
                                保养管理
                            </MenuItem>
                        </router-link>
                        
                        <router-link to="/home/maintain">
                            <MenuItem name="8">
                                <Icon type="ios-settings" />
                                维修管理
                            </MenuItem>
                        </router-link>
                        
                        <router-link to="/home/maintainrun">
                            <MenuItem name="9">
                                <Icon type="md-document" />
                                设备运行记录
                            </MenuItem>
                        </router-link>
                        
                        <Submenu name="10">
                            <template slot="title">
                                <Icon type="ios-paper" />
                                组织机构管理
                            </template>
                            <router-link to="/home/listcompany">
                                <MenuItem name="1-1">单位列表</MenuItem>
                            </router-link>

                            <router-link to="/home/jurisdiction">
                                <MenuItem name="1-2">权限设置</MenuItem>
                            </router-link>
                            
                            <router-link to="/home/usermanage">
                                <MenuItem name="1-3">用户管理</MenuItem>
                            </router-link>

                            <router-link to="/home/rolemanage">
                                <MenuItem name="1-4">角色管理</MenuItem>
                            </router-link>
                            <router-link to="/home/personal">
                                <MenuItem name="1-5">个人信息</MenuItem>
                            </router-link>
                        </Submenu>
                        <Submenu name="11">
                            <template slot="title">
                                <Icon type="md-settings" />
                                系统管理
                            </template>

                            <router-link to="/home/operation">
                                <MenuItem name="2-1">操作记录</MenuItem>
                            </router-link>

                        </Submenu>
                      
                    </Menu>
                </div>
                <div class="right">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './public/Header.vue'
export default {
    data(){
        return{

        }
    },
    methods:{
        getNavWidth(){
            var html = window.innerHeight;
            var Vheader = document.getElementsByClassName('vheader')[0].scrollHeight;
            var Vleft = document.getElementsByClassName('left')[0];
            Vleft.style.height = html-Vheader+'px';
        }
    },
    components:{
        'v-header':Header
    },
    mounted(){
        this.getNavWidth();
    }
}
</script>

<style lang="scss" scoped>
    .home{
        .homeContent{
            display: flex;
            .left{
                background: #fff;
                a{
                    color: #515a6e;
                }
            }
            .right{
                flex: 1;
            }
        }
        
    }
</style>
