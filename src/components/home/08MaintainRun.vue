<template>
    <div id="maintainrun">
        <div class="maintainrun">
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
                        <span>时间搜索：</span>
                        <DatePicker type="daterange" placement="top" placeholder="选择起始时间" style="width: 200px"></DatePicker>
                        <Button icon="ios-search">搜索</Button>
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
                    title: '设备编号',
                    key: 'num1',
                    align:'center',
                    sortable: true
                },
                {
                    title: '设备名称',
                    key: 'name',
                    align:'center',
                },
                {
                    title: '开始时间',
                    key: 'starttime',
                    align:'center',
                },
                {
                    title: '结束时间',
                    align:'center',
                    key: 'endtime'
                },
                {
                    title: '运行时长',
                    align:'center',
                    key: 'duration'
                },
                {
                    title: '开始油位（%）',
                    align:'center',
                    key: 'startoil',
                },
                {
                    title: '结束油位（%）',
                    align:'center',
                    key: 'endoil'
                },
                {
                    title: '产生电能（kWh）',
                    align:'center',
                    key: 'electricity'
                },
                {
                    title: '消耗燃油（L）',
                    align:'center',
                    key: 'loseoil'
                }
            ],
            data5: [
                {
                    num1: 34100071,
                    name: '华实',
                    starttime: '2018-03-30 12:59:10',
                    endtime: '2018-03-30 12:59:10',
                    duration:'03:19:41',
                    startoil:'-',
                    endoil:'-',
                    electricity:'459.900',
                    loseoil:'0.000',

                },
                {
                    num1: 34100071,
                    name: '华实',
                    starttime: '2018-03-30 12:59:10',
                    endtime: '2018-03-30 12:59:10',
                    duration:'03:19:41',
                    startoil:'-',
                    endoil:'-',
                    electricity:'459.900',
                    loseoil:'0.000',
                },
                {
                    num1: 34100071,
                    name: '华实',
                    starttime: '2018-03-30 12:59:10',
                    endtime: '2018-03-30 12:59:10',
                    duration:'03:19:41',
                    startoil:'-',
                    endoil:'-',
                    electricity:'459.900',
                    loseoil:'0.000',
                },
                {
                    num1: 34100071,
                    name: '华实',
                    starttime: '2018-03-30 12:59:10',
                    endtime: '2018-03-30 12:59:10',
                    duration:'03:19:41',
                    startoil:'-',
                    endoil:'-',
                    electricity:'459.900',
                    loseoil:'0.000',
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
.maintainrun{
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
