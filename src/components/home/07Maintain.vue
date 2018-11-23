<template>
    <div id="maintain">
        <div class="maintain">
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
                    title: 'DTU',
                    align:'center',
                    key: 'DTU'
                },
                {
                    title: '控制类型',
                    align:'center',
                    key: 'type',
                },
                {
                    title: '维修机构',
                    align:'center',
                    key: 'org'
                },
                {
                    title: '维修人员',
                    align:'center',
                    key: 'person1'
                },
                {
                    title: '维修费用',
                    align:'center',
                    key: 'cost'
                },
                {
                    title: '维修时间',
                    align:'center',
                    key: 'starttime'
                },
                {
                    title: '维修内容',
                    align:'center',
                    key: 'cot'
                },
                {
                    title: '操作人员',
                    align:'center',
                    key: 'person2'
                }
            ],
            data5: [
                {
                    ID: 1,
                    DTU: 'admin',
                    type: '某类',
                    person1: '张三',
                    org:'维修部',
                    cost:3000,
                    starttime:'2018-6-9 12:30:00',
                    cot:'机架损坏',
                    person2:'张三',

                },
                {
                    ID: 1,
                    DTU: 'admin',
                    type: '某类',
                    person1: '张三',
                    org:'维修部',
                    cost:3000,
                    starttime:'2018-6-9 12:30:00',
                    endtime:'2018-7-9 12:30:00',
                    cot:'机架损坏',
                    person2:'张三',
                },
                {
                    ID: 1,
                    DTU: 'admin',
                    type: '某类',
                    person1: '张三',
                    org:'维修部',
                    cost:3000,
                    starttime:'2018-6-9 12:30:00',
                    endtime:'2018-7-9 12:30:00',
                    cot:'机架损坏',
                    person2:'张三',
                },
                {
                    ID: 1,
                    DTU: 'admin',
                    type: '某类',
                    person1: '张三',
                    org:'维修部',
                    cost:3000,
                    starttime:'2018-6-9 12:30:00',
                    endtime:'2018-7-9 12:30:00',
                    cot:'机架损坏',
                    person2:'张三',
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
.maintain{
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
