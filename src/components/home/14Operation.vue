<template>
    <div id="operation">
        <div class="operation">
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
                        <Button icon="ios-add-circle-outline">新增适配器</Button>
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
                    title: '日期',
                    align:'center',
                    key: 'date'
                },
                {
                    title: '设备名称',
                    align:'center',
                    key: 'name',
                },
                {
                    title: '操作记录',
                    align:'center',
                    key: 'record'
                },
                {
                    title: '操作人',
                    align:'center',
                    key: 'person'
                },
                {
                    title: '设备标识',
                    align:'center',
                    key: 'num1'
                },
                {
                    title: '备注',
                    align:'center',
                    key: 'remark'
                },
                {
                    title: '适配器|ME|',
                    align:'center',
                    key: 'adapter'
                }
            ],
            data5: [
                {
                    ID: 1,
                    date: '2017-03-28 12:00:42',
                    name: '万象科技测试机',
                    record: '启动键:1',
                    person:'万象科技',
                    num1:34140285,
                    remark:'发送成功',
                    adapter:'DT2017050800156',

                },
                {
                    ID: 1,
                    date: '2017-03-28 12:00:42',
                    name: '万象科技测试机',
                    record: '启动键:1',
                    person:'万象科技',
                    num1:34140285,
                    remark:'发送成功',
                    adapter:'DT2017050800156',
                },
                {
                    ID: 1,
                    date: '2017-03-28 12:00:42',
                    name: '万象科技测试机',
                    record: '启动键:1',
                    person:'万象科技',
                    num1:34140285,
                    remark:'发送成功',
                    adapter:'DT2017050800156',
                },
                {
                    ID: 1,
                    date: '2017-03-28 12:00:42',
                    name: '万象科技测试机',
                    record: '启动键:1',
                    person:'万象科技',
                    num1:34140285,
                    remark:'发送成功',
                    adapter:'DT2017050800156',
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
.operation{
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
