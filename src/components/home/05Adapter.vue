<template>
    <div id="adapter">
        <div class="adapter">
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
                        <Button icon="ios-sync">新增适配器</Button>
                    </div>
                    <div class="table">
                        <Table border stripe :columns="columns7" :data="data6"></Table>
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
             columns7: [
                {
                    title: '适配编号',
                    key: 'num1',
                    align:'center',
                    // render: (h, params) => {
                    //     return h('div', [
                    //         h('Icon', {
                    //             props: {
                    //                 type: 'person'
                    //             }
                    //         }),
                    //         h('strong', params.row.num1)
                    //     ]);
                    // }
                },
                {
                    title: '出厂序列号',
                    key: 'serial',
                    align:'center',
                },
                {
                    title: '关联设备',
                    key: 'relevance',
                    align:'center',
                },
                {
                    title: '运行状态',
                    key: 'status',
                    align:'center',
                    render: (h, params) => {
                        return h('div',{
                            style:{
                                padding:'10px 0'
                            }
                        },
                        [
                            h('span',{
                                style: {
                                    display:'inline-block',
                                    padding:'0 20px',
                                },
                            },params.row.status),
                        ])
                    }
                },
                {
                    title: '注册时间',
                    key: 'regtime',
                    align:'center',
                },
                {
                    title: '最新上报数据时间',
                    key: 'refreshtime',
                    align:'center',

                },
                {
                    title: 'Action',
                    key: 'action',
                    width: 250,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.show(params.index)
                                    }
                                }
                            }, '查看'),

                            h('Button', {
                                props: {
                                    type: 'success',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.show1(params.index)
                                    }
                                }
                            }, '编辑'),

                            h('Button', {
                                props: {
                                    type: 'warning',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.show2(params.index)
                                    }
                                }
                            }, '调式'),

                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.remove(params.index)
                                    }
                                }
                            }, '删除'),
                            

                        ]);
                    }
                }
            ],
            data6: [
                {
                    num1: 'Dt201713030100000',
                    serial: 'null',
                    relevance: '测试站点1',
                    status:'——',
                    regtime:'2017-03-28 12:00:42',
                    refreshtime:'2018-03-30 12:59:10'

                },
                {
                    num1: 'Dt201713030100000',
                    serial: 'null',
                    relevance: '测试1号',
                    status:'离线',
                    regtime:'2017-03-28 12:00:42',
                    refreshtime:'2018-03-30 12:59:10',
                    cellClassName: {
                        status: 'demo-table-info-cell-age-adapter',
                    }
                },
                {
                   num1: 'Dt201713030100000',
                    serial: 'null',
                    relevance: '',
                    status:'——',
                    regtime:'2017-03-28 12:00:42',
                    refreshtime:'2018-03-30 12:59:10'
                },
                {
                    num1: 'Dt201713030100000',
                    serial: 'null',
                    relevance: '铭贝林测试站点',
                    status:'——',
                    regtime:'2017-03-28 12:00:42',
                    refreshtime:'2018-03-30 12:59:10'
                },
                {
                    num1: 'Dt201713030100000',
                    serial: 'null',
                    relevance: '昆明云廷022',
                    status:'——',
                    regtime:'2017-03-28 12:00:42',
                    refreshtime:'2018-03-30 12:59:10'
                },
                {
                    num1: 'Dt201713030100000',
                    serial: 'null',
                    relevance: '',
                    status:'——',
                    regtime:'2017-03-28 12:00:42',
                    refreshtime:'2018-03-30 12:59:10'
                },
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
        show (index) {
            this.$Modal.info({
                title: 'User Info',
                content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
            })
        },
        show1 (index) {
            this.$Modal.info({
                title: 'User Info',
                content: `编辑中......`
            })
        },
        show2 (index) {
            this.$Modal.info({
                title: 'User Info',
                content: `调式中......`
            })
        },
        remove (index) {
            this.data6.splice(index, 1);
        },
        rowClassName (row, index) {
            if (index === 1) {
                return 'demo-table-info-row';
            } else if (index === 3) {
                return 'demo-table-error-row';
            }
            return '';
        }
    }
}
</script>

<style lang="scss" scoped>
.adapter{
    width: 98%;
    margin: 0 auto;
    background: #fff;
    margin-top: 20px;
    .content{
        
        height: 500px;
        background: #fff;
        margin: 0 auto;
        padding: 20px;
        .casecot{
            height: 400px;
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
