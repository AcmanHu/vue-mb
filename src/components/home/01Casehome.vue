<template>
    <div id="casehome">
        <div class="casehome">
            <div class="top">
                <Col span="16">
                    <h3 class="title">简要统计表</h3>
                    <div class="left">
                        <Col span="8">
                            <div class="l_left">
                                <h3>设备状态</h3>
                                <p>当前总数量<span>239</span></p>
                                <p>当前在线<span>49</span></p>
                                <p>当前运行<span>4</span></p>
                                <p>当前故障<span>4</span></p>
                                <p>当前离线<span>187</span></p>
                                <p>燃油不足<span>19</span></p>
                                <p>保养即将到期<span>0</span></p>
                                <p>服务即将到期<span>0</span></p>
                            </div>
                            
                        </Col>
                        <Col span="16">
                            <div class="l_right">
                                <h3>历史运行概况</h3>
                                <p class="date">时间：2018-03-30 00：00：00 ~ 2018-03-31 00：00：00</p>
                                <div class="history">
                                    <button>昨天</button>
                                    <button>上周</button>
                                    <button>上月</button>
                                </div>
                                <div class="casemsg">
                                    <Col span="12">
                                        <p>本期开机数量：3</p>
                                        <p>正常工作数量：232</p>
                                        <p>本期运行时间：0.10</p>
                                        <p>本期生拆电量：0.800</p>
                                    </Col>
                                    <Col span="12">
                                        <p>本次开机次数：4</p>
                                        <p>故障报警数量：4</p>
                                        <p>本期消耗燃油：8.000</p>
                                        <p>平均燃油消耗：0.0033898</p>
                                    </Col>

                                </div>
                            </div>
                        </Col>
                    </div>
                </Col>

                <Col span="8">
                    <h3 class="title">机组搜素</h3>
                    <div class="right">
                        <Input v-model="value" placeholder="机组编号（ID）" style=" margin-bottom: 15px;" />
                        <Input v-model="value" placeholder="站点名称" style=" margin-bottom: 15px;" />
                        <Input v-model="value" placeholder="通讯号码" style=" margin-bottom: 15px;" />
                        <div class="oper">
                            <Col span="12" style="text-align:center;">
                                <Button>重置</Button>
                            </Col>
                            <Col span="12" style="text-align:center;">
                                <Button>搜搜</Button>
                            </Col>
                        </div>
                    </div>
                </Col>
                
            </div> 

            <div class="bottom">

                <Col span="12" >
                    <h3>设备状态汇总</h3>
                    <div class="content">
                        <Table height="350" stripe :columns="columns1" :data="data1"></Table>
                    </div>
                </Col>
                <Col span="12" >
                    <h3>电子地图</h3>
                    <div class="map">
                        <div id="wrapper">
                            <div id="floating-panel">
                                <p>
                                    <img src="../../assets/img/blue-dot.png" />待机
                                </p>
                                <p>
                                    <img src="../../assets/img/purple-dot.png" />离线
                                </p>
                                <p>
                                    <img src="../../assets/img/green-dot.png" />运行
                                </p>
                                <p>
                                    <img src="../../assets/img/red-dot.png" />报警
                                </p>
                            </div>
                            <div id="map_canvas" style="width:100%;">
                                <div style="float: left;height: 20px;background-color: #FFFFFF;">
                                    <span>
                                        <img src="../../assets/img/blue-dot.png" />待机
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                
            </div>
        </div>
    </div>
</template>

<script>
import BMap from 'BMap'
import BMapSymbolSHAPEPOIINT from 'BMap_Symbol_SHAPE_POINT'
export default {
    data(){
        return{
             columns1: [
                {
                    title: '操作',
                    key: 'operation'
                },
                {
                    title: 'DTU编号',
                    key: 'DTU'
                },
                {
                    title: '站点名称',
                    key: 'date'
                },
                {
                    title: '发生时间',
                    key: 'date'
                },
                {
                    title: '故障状态',
                    key: 'status'
                }
            ],
            data1: [
                {
                    operation: '操作',
                    DTU:'DT2017040600064',
                    name:'曹县常乐集64号',
                    date:'2018-03-31 12:48:32',
                    status:'电流不平衡警告'
                },
                {
                    operation: '操作',
                    DTU:'DT2017040600064',
                    name:'曹县常乐集64号',
                    date:'2018-03-31 12:48:32',
                    status:'电流不平衡警告'
                },
                {
                    operation: '操作',
                    DTU:'DT2017040600064',
                    name:'曹县常乐集64号',
                    date:'2018-03-31 12:48:32',
                    status:'电流不平衡警告'
                },
                {
                    operation: '操作',
                    DTU:'DT2017040600064',
                    name:'曹县常乐集64号',
                    date:'2018-03-31 12:48:32',
                    status:'电流不平衡警告'
                },
                {
                    operation: '操作',
                    DTU:'DT2017040600064',
                    name:'曹县常乐集64号',
                    date:'2018-03-31 12:48:32',
                    status:'电流不平衡警告'
                },
                {
                    operation: '操作',
                    DTU:'DT2017040600064',
                    name:'曹县常乐集64号',
                    date:'2018-03-31 12:48:32',
                    status:'电流不平衡警告'
                },
                {
                    operation: '操作',
                    DTU:'DT2017040600064',
                    name:'曹县常乐集64号',
                    date:'2018-03-31 12:48:32',
                    status:'电流不平衡警告'
                }
            ],
            value:''
        }
    },
    methods:{
        baiduMap(){
            var image = require('../../assets/img/red-dot.png');
			var imagepurple = require('../../assets/img/purple-dot.png');
			var imagegreen = require('../../assets/img/green-dot.png');
			var imageblue = require('../../assets/img/blue-dot.png');
			var mylatlng = new google.maps.LatLng(39.92, 116.46);
			var mapOptions = {
				zoom: 8, //缩放级别      
				center: mylatlng,
				mapTypeId: google.maps.MapTypeId.ROADMAP, //ROADMAP-默认视图 SATELLITE-显示Google地球卫星图像 HYBRID-混合显示普通视图和卫星视图 TERRAIN-地形图   
				scaleControl: true, //比例尺    
				mapTypeControl: true,
				mapTypeControlOptions: { //设置控件的地图类型ID，ROADMAP显示普通街道地图，SATELLITE显示卫星图像，HYBRID显示卫星图像上的主要街道透明层
					style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
				}
			};
			var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
			var mark = new google.maps.Marker({
				icon: image,
				position: mylatlng,
				map: map,
			});
			var message = new google.maps.InfoWindow({
				content: "<p><span>地址:</span>place</p>报警",
				size: new google.maps.Size(100, 100)
			});

			google.maps.event.addListener(mark, 'mouseover', function() {
				message.open(map, mark);
			});
			google.maps.event.addListener(mark, 'mouseout', function() {
				message.close(map, mark);
			});
			var mark1 = new google.maps.Marker({
				position: new google.maps.LatLng(39.92, 116.00),
				icon: imageblue,
				map: map,
			});
			var message1 = new google.maps.InfoWindow({
				content: "<p><span>地址:</span>place1</p>待机",
				size: new google.maps.Size(100, 100)
			});
			google.maps.event.addListener(mark1, 'mouseover', function() {
				message1.open(map, mark1);
			});
			google.maps.event.addListener(mark1, 'mouseout', function() {
				message1.close(map, mark1);
			});
			var mark2 = new google.maps.Marker({
				position: new google.maps.LatLng(39.82, 116.10),
				icon: imagepurple,
				map: map,
			});
			var message2 = new google.maps.InfoWindow({
				content: "<p><span>地址:</span>place2</p>离线",
				size: new google.maps.Size(100, 100)
			});
			google.maps.event.addListener(mark2, 'mouseover', function() {
				message2.open(map, mark2);
			});
			google.maps.event.addListener(mark2, 'mouseout', function() {
				message2.close(map, mark2);
			});
			var mark3 = new google.maps.Marker({
				position: new google.maps.LatLng(39.72, 116.20),
				icon: imagegreen,
				map: map,
			});
			var message3 = new google.maps.InfoWindow({
				content: "<p><span>地址:</span>place3</p>运行",
				size: new google.maps.Size(100, 100)
			});
			google.maps.event.addListener(mark3, 'mouseover', function() {
				message3.open(map, mark3);
			});
			google.maps.event.addListener(mark3, 'mouseout', function() {
				message3.close(map, mark3);
			});
        }
    },
    mounted(){
        this.baiduMap();
    }
}
</script>

<style lang="scss" scoped>
.casehome{
    width: 98%;
    margin: 0 auto;
    margin-top: 20px;
    .top{
        margin: 0 auto;
        height: 280px;
        padding: 10px;
        .title{
            padding: 5px 0px;
        }
        .left{
            height: 220px;
            margin-right: 20px;
            .l_left{
                height: 220px;
                margin-right: 2px;
                padding: 10px;
                background: #fff;
                p{  
                    line-height: 20px;
                    font-size: 14px;
                    span{
                        float: right;
                    }
                    &:nth-child(3){
                        color: green;
                    }
                    &:nth-child(4){
                        color: blue;
                    }
                    &:nth-child(5){
                        color: red;
                    }
                    &:nth-child(7){
                        color: orange;
                    }
                }
            }
            .l_right{
                height: 220px;
                padding: 10px;
                background: #fff;
                .date{
                    font-size: 14px;
                }
                .history{
                    button{
                        border-radius: 5px;
                        background-color: #003147;
                        color: #FFFFFF;
                        padding: 0px 10px;
                        outline: none;
                    }
                }
                .casemsg{
                    margin-top: 30px;
                    p{
                        line-height: 20px;
                        font-size: 14px;
                    }
                }
            }
        }
        .right{
            height: 220px;
            padding: 20px 30px;
            background: #fff;
        }
    }
    .bottom{
        height: auto;
        padding: 10px;
        .content{
            height: auto;
            margin-right: 20px;
        }
        .map{
            height: 400px;
            #wrapper {
                height: 100%;
                position: relative;
            }
            
            #map_canvas {
                height: 100%;
                width: 50px;
            }
            
            #floating-panel {
                position: absolute;
                top: 55%;
                left: 0.5%;
                z-index: 5;
                background-color: #fff;
                padding: 5px;
                border: 1px solid #999;
                text-align: center;
                font-family: 'Roboto', 'sans-serif';
                line-height: 30px;
                padding-left: 10px;
            }
            
            #floating-panel p {
                margin: 0px;
            }
            
            #floating-panel p img {
                width: 15px;
            }
        }
        h3{
            padding: 5px;
        }
    }
}
        
</style>
