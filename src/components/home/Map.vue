<template>
    <div id="map">
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
    </div>
</template>

<script>
import BMap from 'BMap'
import BMapSymbolSHAPEPOIINT from 'BMap_Symbol_SHAPE_POINT'
export default {
    data(){
        return{
            
        }
    },
    methods:{
        mapHeight(){
            var MapHeight = document.getElementById('wrapper');
            MapHeight.style.height = window.innerHeight-60+'px';
        },
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
        this.mapHeight();
        this.baiduMap();
    }
}
</script>

<style lang="scss" scoped>
    #wrapper {
			// height: 100px;
            position: relative;
		}
		
		#map_canvas {
			height: 100%;
			width: 50px;
		}
		
		#floating-panel {
			position: absolute;
			top: 77%;
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
</style>
