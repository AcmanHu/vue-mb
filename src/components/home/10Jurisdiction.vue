<template>
    <div id="jurisdiction">
        <div class="jurisdiction">
            <div class="content">
                <div class="casecot">
                    <div class="top">
                        <Select v-model="model8" clearable style="width:120px" placeholder="设备名称">
                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                        <Select v-model="model9" clearable style="width:120px" placeholder="包含">
                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                        <Input v-model="value" style="width: 180px" />
                        <Button icon="ios-search">搜索</Button>
                        <Button icon="ios-sync">重置</Button>
                        <Button icon="ios-add-circle-outline">添加</Button>
                        <Button icon="ios-cloud-upload-outline">导入</Button>
                        <Button icon="ios-cloud-download-outline">导出</Button>

                    </div>
                    <div class="table">
                        <Table stripe border :columns="columns5" :data="data5"></Table>
                    </div>
                    <div class="bottom">
                        <Page class="page" :total="100" show-elevator />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            columns5: [
                {
                    title: 'ID',
                    key: 'ID',
                    align:'center',
                    sortable: true
                },
                {
                    title: '用户名',
                    key: 'name',
                    align:'center',
                },
                {
                    title: '超级管理员',
                    key: 'superAdmin',
                    align:'center',
                },
                {
                    title: '高级管理员',
                    align:'center',
                    key: 'highAdmin'
                },
                {
                    title: '终端用户',
                    align:'center',
                    key: 'terminalUser'
                },
                {
                    title: '普通用户',
                    align:'center',
                    key: 'commonUser',
                },
                {
                    title: '经销商管理员',
                    align:'center',
                    key: 'dealerAdmin'
                },
                {
                    title: '装机厂管理员',
                    align:'center',
                    key: 'installAdmin'
                },
                {
                    title: '终端用户管理员',
                    align:'center',
                    key: 'terminalAdmin'
                },
                {
                    title: '工程师',
                    align:'center',
                    key: 'engineer'
                },
                {
                    title: '操作员',
                    align:'center',
                    key: 'operator'
                },
                {
                    title: '观察员',
                    align:'center',
                    key: 'Observer'
                }
                
            ],
            data5: [
                {
                    ID: 1,
                    name: 'admin',
                    superAdmin: '√',
                    highAdmin: 'x',
                    terminalUser:'x',
                    commonUser:'x',
                    dealerAdmin:'x',
                    installAdmin:'x',
                    terminalAdmin:'x',
                    engineer:'x',
                    operator:'x',
                    Observer:'x',


                },
                {
                    ID: 1,
                    name: 'admin',
                    superAdmin: '√',
                    highAdmin: 'x',
                    terminalUser:'x',
                    commonUser:'x',
                    dealerAdmin:'x',
                    installAdmin:'x',
                    terminalAdmin:'x',
                    engineer:'x',
                    operator:'x',
                    Observer:'x',
                },
                {
                    ID: 1,
                    name: 'admin',
                    superAdmin: '√',
                    highAdmin: 'x',
                    terminalUser:'x',
                    commonUser:'x',
                    dealerAdmin:'x',
                    installAdmin:'x',
                    terminalAdmin:'x',
                    engineer:'x',
                    operator:'x',
                    Observer:'x',
                },
                {
                    ID: 1,
                    name: 'admin',
                    superAdmin: '√',
                    highAdmin: 'x',
                    terminalUser:'x',
                    commonUser:'x',
                    dealerAdmin:'x',
                    installAdmin:'x',
                    terminalAdmin:'x',
                    engineer:'x',
                    operator:'x',
                    Observer:'x',
                }
            ],
            cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model8: '',
                model9: '',
                value:''
        }
    },
    methods:{
        
    }
}
</script>

<style lang="scss" scoped>
.jurisdiction{
    width: 98%;
    margin: 0 auto;
    background: #fff;
    margin-top: 20px;
    .content{
        
        background: #fff;
        margin: 0 auto;
        padding: 20px;
        .casecot{
            // background: yellow;
            .top{
                height: 60px;
                // line-height: 60px;
                // background: skyblue;
            }
            .table{
                height: auto;
            }
            .bottom{
                .page{
                    margin-top: 20px;
                }
            }
        }
    }
}
        
</style>
