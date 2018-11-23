<template>
    <div id="personal">
        <div class="personal">
            <div class="content">
                <div class="top">
                    <h2>个人信息</h2>
                </div>
                <div class="casecot">
                    <div class="left">
                        <div class="headimg">
                            <img src="../../assets/img/a4.jpg" alt="">
                        </div>
                    </div>
                    <div class="center">
                        <h3>用户名</h3>
                        <Input v-model="value1" disabled clearable  placeholder="用户名" style="width:80%" />
                        <h3>真实姓名</h3>
                        <Input v-model="value2" disabled clearable  placeholder="真实姓名" style="width:80%" />
                        <h3>所属部门</h3>
                        <Input v-model="value3" disabled clearable  placeholder="所属部门" style="width:80%" />
                        <h3>E-mail</h3>
                        <Input v-model="value4"  placeholder="电子邮箱" style="width:80%" />
                        <h3>新密码</h3>
                        <Input v-model="value5" clearable  type="password" placeholder="新密码" style="width:80%" />
                    </div>
                    <div class="right">
                        <h3>分机号码</h3>
                        <Input v-model="value6" disabled clearable  placeholder="分机号码" style="width:80%" />
                        <h3>所属角色</h3>
                        <Input v-model="value7" disabled clearable  placeholder="所属角色" style="width:80%" />
                        <h3>性别</h3>
                        <Select v-model="model1" style="width:80%" @on-change="Select(model1)">
                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                        <h3>旧密码</h3>
                        <Input v-model="value9"  placeholder="旧密码" style="width:80%" />
                        <h3>重复新密码</h3>
                        <Input v-model="value10" clearable  type="password" placeholder="重复新密码" style="width:80%" />
                    </div>
                </div>
                <div class="bottom">
                    <Button @click="updatedInfo()" type="success">修改</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import config from '../../model/config.js'
export default {
    data(){
        return{
            api:config.api,
            value1:'',
            value2:'',
            value3:'',
            value4:'',
            value5:'',
            value6:'',
            value7:'',
            value8:'',
            value9:'',
            value10:'',
            cityList: [
                    {
                        value: '男',
                        label: '男'
                    },
                    {
                        value: '女',
                        label: '女'
                    },
                ],
                model1: '男',
                result:[],
        }
    },
    methods:{
        Select(val){
            // alert(val)
        },
        getInfo(){
            var api = this.api+'getAccount';
            this.$http.get(api,{
                credentials: true
            }).then((response)=>{
                var result = response.body.data[0];
                this.value1 = result.userName;
                this.value2 = result.realName;
                this.value3 = result.affiliatedUnitID;
                this.value4 = result.email;
                this.value6 = result.extensionNumber;
                this.value7 = result.role;
                this.model1 = result.sex;
                console.log(response.body.data[0])

            },(err)=>{
                console.log('请求失败了');
            })
        },
        updatedInfo() {
            var api = this.api+'updateAccount';
            this.$http.put(api,{
                email:this.value4
            },{
               credentials: true 
            }).then((response)=>{
                if(response.body.code){
                    this.getInfo();
                    
                }
            },(err)=>{

            })
        },
        //登陆 
        login(){
            var api = this.api+'login';
            this.$http.post(api,{
                affiliatedUnit: "重庆铭贝科技有限公司",
                userName: "admin",
                password: "root",
            },{
                credentials: true
            }).then((response)=>{
                console.log(response);
            },(err)=>{
                console.log(err);
            })
        },
        deletemsg(){
            var api = 'http://172.17.203.125/logOut';
            this.$http.delete(api).then((response)=>{
                console.log(response);
            },(err)=>{
                console.log('请求失败了');
            })
        }
    },
    mounted(){
        this.login();
        this.getInfo();
    }
}
</script>

<style lang="scss" scoped>
.personal{
    width: 70%;
    min-width: 1100px;
    margin: 0 auto;
    background: #fff;
    margin-top: 20px;
    .content{
        
        background: #fff;
        margin: 0 auto;
        padding: 20px;
        .top{
            height: 60px;
            line-height: 60px;
            h2{
                text-align: center;
            }
        }
        .casecot{
            display: flex;
            .left{
                height: auto;
                width: 33.33%;
                // line-height: 60px;
                text-align: center;
                .headimg{
                    width: 128px;
                    height: 128px;
                    margin: 0 auto;
                    border-radius:50%;
                    overflow: hidden; 
                    img{
                        width: 128px;
                        height: 128px;
                    }
                }
            }
            .center{
                height: auto;
                width: 33.33%;
                h3{
                    color: black;
                    padding: 5px 0;
                }
            }
            .right{
                height: auto;
                width: 33.33%;
                h3{
                    color: black;
                    padding: 5px 0;
                }
            }
        }
        .bottom{
            text-align: right;
            margin-top: 20px;
        }
    }
}
        
</style>
