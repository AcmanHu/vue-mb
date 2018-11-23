<template>
    <div id="listcompany">
        <div class="listcompany">
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
                    title: '单位名称',
                    key: 'name',
                    align:'center',
                },
                {
                    title: '单位类型',
                    key: 'type',
                    align:'center',
                },
                {
                    title: '联系人',
                    align:'center',
                    key: 'linkman'
                },
                {
                    title: '联系电话',
                    align:'center',
                    key: 'telnum'
                },
                {
                    title: '上级单位',
                    align:'center',
                    key: 'parentAccount',
                },
                {
                    title: '单位地址',
                    align:'center',
                    key: 'address'
                },
                {
                    title: '电子邮箱',
                    align:'center',
                    key: 'email'
                },
                {
                    title: '单位网址',
                    align:'center',
                    key: 'url'
                },
                {
                    title: 'logo',
                    align:'center',
                    key: 'logo'
                },
                {
                    title: '创建时间',
                    align:'center',
                    key: 'settime'
                },
                {
                    title: '备注',
                    align:'center',
                    key: 'remark'
                }
                
            ],
            data5: [
                {
                    ID: 117,
                    name: '中国铁塔股份有限公司',
                    type: '终端',
                    linkman: '终端',
                    telnum:'18809386048',
                    parentAccount:'重庆鑫能机电设备...',
                    address:'甘肃省定西市',
                    email:'',
                    url:'',
                    logo:'',
                    settime:'2018-03-27 11:55...',
                    remark:''


                },
                {
                    ID: 117,
                    name: '中国铁塔股份有限公司',
                    type: '终端',
                    linkman: '终端',
                    telnum:'18809386048',
                    parentAccount:'重庆鑫能机电设备...',
                    address:'甘肃省定西市',
                    email:'',
                    url:'',
                    logo:'',
                    settime:'2018-03-27 11:55...',
                    remark:''
                },
                {
                    ID: 117,
                    name: '中国铁塔股份有限公司',
                    type: '终端',
                    linkman: '终端',
                    telnum:'18809386048',
                    parentAccount:'重庆鑫能机电设备...',
                    address:'甘肃省定西市',
                    email:'',
                    url:'',
                    logo:'',
                    settime:'2018-03-27 11:55...',
                    remark:''
                },
                {
                   ID: 117,
                    name: '中国铁塔股份有限公司',
                    type: '终端',
                    linkman: '终端',
                    telnum:'18809386048',
                    parentAccount:'重庆鑫能机电设备...',
                    address:'甘肃省定西市',
                    email:'',
                    url:'',
                    logo:'',
                    settime:'2018-03-27 11:55...',
                    remark:''
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
.listcompany{
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
