<template>
    <div id="warn">
        <div class="warn">
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
                    title: '告警编号',
                    key: 'num1',
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
                    title: '设备编号',
                    key: 'num2'
                },
                {
                    title: '告警名称',
                    key: 'name'
                },
                {
                    title: '告警级别',
                    key: 'level',
                    className: 'demo-table-info-column'
                },
                {
                    title: '产生时间',
                    key: 'starttime'
                },
                {
                    title: '当前状态',
                    key: 'status',
                    align:'center',
                    render: (h, params) => {
                        return h('div', [
                            h('span',{
                                style:{
                                    display:'inline-block',
                                    background:'#00bc00',
                                    padding:'0 20px',
                                    color:'white',
                                }
                            }, params.row.status)
                        ]);
                    }

                },
                {
                    title: '恢复时间',
                    key: 'recovertime'
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
                            }, '生成工单'),
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
                            }, '详情'),
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
                            }, '删除')
                        ]);
                    }
                }
            ],
            data6: [
                {
                    num1: 'GJ201803311749244617',
                    num2: '曹县常乐集64号 (DT2017040...',
                    name: '电流不平衡警告',
                    level:'空',
                    starttime:'2018-03-31 17:49:24',
                    status:'已恢复',
                    recovertime:'2018-03-31 17:50:04',
                    bag:'#00bc00'

                },
                {
                    num1: 'GJ201803311749244617',
                    num2: '曹县常乐集64号 (DT2017040...',
                    name: '电流不平衡警告',
                    level:'空',
                    starttime:'2018-03-31 17:49:24',
                    status:'已恢复',
                    recovertime:'2018-03-31 17:50:04',
                    bag:'#00bc00'
                },
                {
                    num1: 'GJ201803311749244617',
                    num2: '曹县常乐集64号 (DT2017040...',
                    name: '电流不平衡警告',
                    level:'空',
                    starttime:'2018-03-31 17:49:24',
                    status:'已恢复',
                    recovertime:'2018-03-31 17:50:04',
                    bag:'#00bc00'
                },
                {
                    num1: 'GJ201803311749244617',
                    num2: '曹县常乐集64号 (DT2017040...',
                    name: '电流不平衡警告',
                    level:'空',
                    starttime:'2018-03-31 17:49:24',
                    status:'未恢复',
                    recovertime:'2018-03-31 17:50:04',
                    bag:'#00bc00',
                    cellClassName: {
                            status: 'demo-table-info-cell-age',
                    }
                },
                {
                    num1: 'GJ201803311749244617',
                    num2: '曹县常乐集64号 (DT2017040...',
                    name: '电流不平衡警告',
                    level:'空',
                    starttime:'2018-03-31 17:49:24',
                    status:'未恢复',
                    recovertime:'2018-03-31 17:50:04',
                    bag:'#00bc00',
                    cellClassName: {
                            status: 'demo-table-info-cell-age',
                    }
                },
                {
                    num1: 'GJ201803311749244617',
                    num2: '曹县常乐集64号 (DT2017040...',
                    name: '电流不平衡警告',
                    level:'空',
                    starttime:'2018-03-31 17:49:24',
                    status:'未恢复',
                    recovertime:'2018-03-31 17:50:04',
                    bag:'#00bc00',
                    cellClassName: {
                            status: 'demo-table-info-cell-age',
                    }
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
                content: `工单生成中......`
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
.warn{
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
