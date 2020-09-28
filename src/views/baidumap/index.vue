<template>
  <baidu-map
    class="map"
    :center="center"
    :zoom="zoom"
    :minZoom="minZoom"
    :maxZoom="maxZoom"
    :mapClick="mapClick"
    :map-type="mapType"
    :dragging="attrDragging"
    :scrollWheelZoom="scrollWheelZoom"
    :inertialDragging="inertialDragging"
    :continuousZoom="continuousZoom"
    :mapStyle="mapStyle"
    @ready="mapReady"
  />
</template>
<script>
export default {
  data() {
    return {
      ak: '', // 百度地图开发者平台申请的密钥，仅在局部注册组件时声明
      center: { lng: 0, lat: 0 }, // 不配置cebter和zoom是地图不渲染，当center 属性为合法地名字符串时例外，因为百度地图会根据地名自动调整 zoom 的值。
      zoom: 6, // 缩放等级
      minZoom: 3, // 最小缩放级别
      maxZoom: 18, // 最大缩放级别
      highResolution: true, // 高分屏模式 该项仅在地图组件挂载时加载一次
      mapClick: true, // 允许点击 该项仅在地图组件挂载时加载一次
      mapType: 'BMAP_HYBRID_MAP', // 地图类型, BMAP_NORMAL_MAP普通街道视图,BMAP_PERSPECTIVE_MAP透视图像视图,BMAP_SATELLITE_MAP卫星视图,BMAP_HYBRID_MAP卫星和路网的混合视图
      attrDragging: true, // 允许拖拽
      scrollWheelZoom: true, // 允许鼠标滚轮缩放
      doubleClickZoom: true, // 允许双击缩放
      keyboard: true, // 允许键盘操作
      inertialDragging: true, // 允许惯性拖拽
      continuousZoom: true, // 允许无级缩放
      pinchToZoom: true, // 允许双指缩放
      autoResize: true, // 允许自适应容器尺寸
      mapStyle:  { // 自定义主题
        styleJson: [
          {
            "featureType": "all",
            "elementType": "geometry",
            "stylers": {
                "hue": "#007fff",
                "saturation": 89
            }
          },
          {
            "featureType": "water",
            "elementType": "all",
            "stylers": {
                "color": "#ffffff"
            }
          }
        ]
      }
    }
  },
  methods: {
    // 地图初始化完毕
    mapReady({Bmap, map}) {
      console.log(Bmap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 12
    },
    // 左键单击地图时触发此事件。 当双击时，产生的事件序列为： click click dblclick
    click({type, target, point, pixel, overlay}) {
      console.log({type, target, point, pixel, overlay})
    },
    // 鼠标双击地图时会触发此事件
    dblclick({type, target, pixel, point}) {
      console.log({type, target, pixel, point})
    },
    // 右键单击地图时触发此事件。 当双击时，产生的事件序列为： rightclick rightclick rightdblclick
    rightclick({type, target, point, pixel, overlay}) {
      console.log({type, target, point, pixel, overlay})
    },
    // 右键双击地图时触发此事件
    rightdblclick({type, target, point, pixel, overlay}) {
      console.log({type, target, point, pixel, overlay})
    },
    // 地图类型发生变化时触发此事件
    maptypechange({type, target}) {
      console.log({type, target})
    },
    // 鼠标在地图区域移动过程中触发此事件
    mousemove({type, target, point, pixel, overlay}) {
      console.log({type, target, point, pixel, overlay})
    },
    // 鼠标移入地图区域时触发此事件
    mouseover({type, target}) {
      console.log({type, target})
    },
    // 鼠标移出地图区域时触发此事件
    mouseout({type, target}) {
      console.log({type, target})
    },
    // 地图移动开始时触发此事件
    movestart({type, target}) {
      console.log({type, target})
    },
    // 地图移动过程中触发此事件
    moveend({type, target}) {
      console.log({type, target})
    },
    // 地图更改缩放级别开始时触发触发此事件
    zoomstart({type, target}) {
      console.log({type, target})
    },
    // 地图更改缩放级别结束时触发触发此事件
    zoomend({type, target}) {
      console.log({type, target})
    },
    // 当使用Map.addOverlay()方法向地图中添加单个覆盖物时会触发此事件
    addoverlay({type, target}) {
      console.log({type, target})
    },
    // 当使用Map.addControl()方法向地图中添加单个控件时会触发此事件
    addcontrol({type, target}) {
      console.log({type, target})
    },
    // 当使用Map.removeControl()方法移除单个控件时会触发此事件
    removecontrol({type, target}) {
      console.log({type, target})
    },
    // 当使用Map.removeOverlay()方法移除单个覆盖物时会触发此事件
    removeoverlay({type, target}) {
      console.log({type, target})
    },
    // 当使用Map.clearOverlays()方法一次性移除全部覆盖物时会触发此事件
    clearoverlays({type, target}) {
      console.log({type, target})
    },
    // 开始拖拽地图时触发
    dragstart({type, target, pixel, point}) {
      console.log({type, target, pixel, point})
    },
    // 拖拽地图过程中触发
    dragging({type, target, pixel, point}) {
      console.log({type, target, pixel, point})
    },
    // 停止拖拽地图时触发
    dragend({type, target, pixel, point}) {
      console.log({type, target, pixel, point})
    },
    // 添加一个自定义地图图层时触发此事件
    addtilelayer({type, target}) {
      console.log({type, target})
    },
    // 移除一个自定义地图图层时触发此事件
    removetilelayer({type, target}) {
      console.log({type, target})
    },
    // 调用Map.centerAndZoom()方法时会触发此事件。这表示位置、缩放层级已经确定，但可能还在载入地图图块
    load({type, target, pixel, point, zoom}) {
      console.log({type, target, pixel, point, zoom})
    },
    // 地图可视区域大小发生变化时会触发此事件
    resize({type, target, size}) {
      console.log({type, target, size})
    },
    // 点击热区时触发此事件
    hotspotclick({type, target, spots}) {
      console.log({type, target, spots})
    },
    // 鼠标移至热区时触发此事件
    hotspotover({type, target, spots}) {
      console.log({type, target, spots})
    },
    // 鼠标移出热区时触发此事件
    hotspotout({type, target, spots}) {
      console.log({type, target, spots})
    },
    // 当地图所有图块完成加载时触发此事件
    tilesloaded({type, target}) {
      console.log({type, target})
    },
    // 触摸开始时触发此事件，仅适用移动设备
    touchstart({type, target, point, pixel}) {
      console.log({type, target, point, pixel})
    },
    // 触摸移动时触发此事件，仅适用移动设备
    touchmove({type, target, point,pixel}) {
      console.log({type, target, point, pixel})
    },
    // 触摸结束时触发此事件，仅适用移动设备
    touchend({type, target, point,pixel}) {
      console.log({type, target, point, pixel})
    },
    // 长按事件，仅适用移动设备
    longpress({type, target, point,pixel}) {
      console.log({type, target, point, pixel})
    },
  }
}
</script>
<style lang="scss" scoped>
.map {
  width: 100%;
  height: 100%;
}
</style>
