<template>
    <div id="equipment">
        <div class="equipment">
            <div class="content">
                <div class="title">
                    <div class="casetitle">
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
                    
                </div>
                <Table stripe border :columns="columns7" :data="data6"></Table>
                <div class="paging">
                    <Page class="page" :total="100" show-elevator />
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
                        title: '图片',
                        key: 'photo',
                        width:200,
                        align:'center',
                        render: (h, params) => {
                            return h('div', [
                                h('img',{
                                    attrs:{
                                        src: require('../../assets/img/p1.jpg')
                                    },
                                    style:{
                                        height:'100px',
                                        width:'160px'
                                    }
                                })
                            ]);
                        }
                    },
                    {
                        title: '测试站点',
                        key: 'name',
                        render: (h, params) => {
                            // console.log(params)
                            return h('div',{
                                style:{
                                    padding:'10px 0'
                                }
                            }, [
                                h('span',{
                                    style:{
                                        display:'inline-block',
                                        background:'#adadad',
                                        padding:'0 5px',
                                        color:'white'
                                    }
                                },'离线'),
                                h('span',{
                                    style:{
                                        display:'inline-block',
                                        marginLeft:'10px'
                                    }
                                },params.row.name),
                                h('p',{
                                    style: {
                                        paddingTop:'5px'
                                    },
                                },'设备编号：'+params.row.num),
                                h('p',{
                                    style: {
                                        paddingTop:'5px'
                                    },
                                },'设备地址：'+params.row.address)
                            ])      
                        }
                    },   
                    {
                        title: '用户',
                        key: 'user',
                        render: (h, params) => {
                            // console.log(params)
                            return h('div',{
                                style:{
                                    padding:'10px 0'
                                }
                            }, [
                                h('p',{
                                    style: {
                                        paddingTop:'5px'
                                    },
                                },'所属用户：'+params.row.user),
                                h('p',{
                                    style: {
                                        paddingTop:'5px'
                                    },
                                },'设备类型：'+params.row.type),
                                h('p',{
                                    style: {
                                        paddingTop:'5px'
                                    },
                                },'所属单位：'+params.row.utit)
                            ])      
                        }
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 200,
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
                                }, '查看详情'),
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
                                }, '删除设备')
                            ]);
                        }
                    }
                ],
                data6: [
                    {
                        name: '测试站点',
                        num: 756124124144,
                        address: '重庆市江北区港安二路',
                        user:'admin',
                        type:'发动机组',
                        utit:'重庆铭贝有限公司',
                        photo:'../../assets/logo.png'
                    },
                    {
                        name: '测试站点',
                        num: 756124124144,
                        address: '重庆市江北区港安二路',
                        user:'admin',
                        type:'发动机组',
                        utit:'重庆铭贝有限公司',
                        photo:'../../assets/logo.png'
                    },
                    {
                        name: '测试站点',
                        num: 756124124144,
                        address: '重庆市江北区港安二路',
                        user:'admin',
                        type:'发动机组',
                        utit:'重庆铭贝有限公司',
                        photo:'../../assets/logo.png'
                    },
                    {
                        name: '测试站点',
                        num: 756124124144,
                        address: '重庆市江北区港安二路',
                        user:'admin',
                        type:'发动机组',
                        utit:'重庆铭贝有限公司',
                        photo:'../../assets/logo.png'
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
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            }
    }
}
</script>

<style lang="scss" scoped>
    
    .equipment{
        background: #edf0f5;
        .content{
            width: 98%;
            margin: 0 auto;
            background: #fff;
            .title{
                height: 60px;
                line-height: 60px;
                margin-top: 20px;
                .casetitle{
                    padding-left: 16px;
                }
                // background: red;
            }
            .paging{
                height: 60px;
                line-height: 60px;
                .page{
                    margin-left: 16px;
                }
            }
        }
        
    }
</style>
