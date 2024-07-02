<template>
  <TwaMainLt>
    <template #Body>
      <div class="MainMap">
        <div class="MainMapBody">
          <div class="MainMapBodyHeading" style="margin-bottom: 20px">
            <div class="MainMapBoyHeadingTitle" style="font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: -0.18px;">
              Локации доставки и наши ресурсы
            </div>
          </div>
          <div class="MainMapBlock" style="border-radius: 10px;overflow: hidden">
            <div class="MainMapBlockWrapper" style="overflow: hidden; z-index: 1; margin-bottom: 24px;">
              <l-map style="height: 280px" :zoom="zoom" :center="center" :maxZoom="12">
                <l-tile-layer :url="url" :attribution="''"></l-tile-layer>
              </l-map>
            </div>
          </div>


          <div class="MapMapLocation">
            <div class="MapMapLocationHeading" style="margin-bottom: 14px">
              <div class="MapMapLocationHeadingTitle" style="font-weight: 500;">
                Локации:
              </div>
            </div>
            <div class="MapMapLocationList" v-if="dispatchesList.length > 0">
              <div class="MainMapListItem" v-for="dispatchItem in dispatchesList">
                <div class="MainMapListItemPoint">
                  <div class="MainMapListItemPointTitle">
                    {{ dispatchItem.name }}
                  </div>
                </div>
                <div class="MainMapListItemAddress">
                  {{ dispatchItem.full_address }}
                </div>
              </div>
            </div>

            <div class="MapMapLocationNot" v-else>
              <div class="MapMapLocationNotBlock">
                <div class="MapMapLocationNotBlockTitle">
                  Локации загружаются...
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </template>
  </TwaMainLt>
</template>
<script>
import TwaMainLt from "~/layout/twaMainLt.vue";
import {LMap, LMarker, LTileLayer} from "vue2-leaflet";
import 'leaflet/dist/leaflet.css';

export default {
  name: "index",
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      // attribution:
      //   '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 8,
      center: [55.7586774649528, 37.61873340813827],
      dispatchesList: []
    };
  },
  async asyncData({$axios}) {
    try {
      const {result} = await $axios.$get("/api/v1/dispatch_p/get");
      return {dispatchesList: result}
    } catch (e) {
      console.log("map:", e);
      // return {dispatchesList: []}
    }

  },
  components: {
    TwaMainLt, LMap,
    LTileLayer,
    LMarker,
  }
}
</script>

<style>
.leaflet-control-attribution {
  display: none;
}
</style>
<style scoped>
.MainMapListItem {
  padding: 10px 16px;
  border: solid 1px var(--accent-block-color);
  color: var(--text-second-color);
  margin-bottom: 10px;
  border-radius: 12px;
}

.vue2leaflet-map {
  z-index: -1;
}


.MapMapLocationNotBlock {
  background: #EFF3FF;
  border-radius: 10px;
  padding: 20px 24px;
  margin-bottom: 14px;
}

.MapMapLocationNotBlock .MapMapLocationNotBlockTitle {
  color: var(--text-second-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.14px;
}

</style>
