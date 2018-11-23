<template>
    <div id="upkeep">
        <div class="upkeep">
            <div class="content">
                <div class="casecot">
                    <div class="top">
                        <Button icon="ios-search">添加</Button>
                        <Button icon="ios-search">导出</Button>
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
                    title: '保养人员',
                    align:'center',
                    key: 'person1'
                },
                {
                    title: '保养机构',
                    align:'center',
                    key: 'org'
                },
                {
                    title: '保养费用',
                    align:'center',
                    key: 'cost'
                },
                {
                    title: '保养时间',
                    align:'center',
                    key: 'starttime'
                },
                {
                    title: '下次保养时间',
                    align:'center',
                    key: 'endtime'
                },
                {
                    title: '保养内容',
                    align:'center',
                    key: 'cot'
                },
                {
                    title: '保养人员',
                    align:'center',
                    key: 'person2'
                },
                {
                    title: '上次保养时间',
                    align:'center',
                    key: 'lasttime'
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
                    endtime:'2018-7-9 12:30:00',
                    cot:'机架损坏',
                    person2:'张三',
                    lasttime:'2018-5-9 12:30:00',

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
                    lasttime:'2018-5-9 12:30:00',
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
                    lasttime:'2018-5-9 12:30:00',
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
                    lasttime:'2018-5-9 12:30:00',
                }
            ]
        }
    },
    methods:{
        
    }
}
</script>

<style lang="scss" scoped>
.upkeep{
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
