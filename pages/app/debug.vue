<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "debug"
})
</script>

<template>
  <div class="">
    <hr>
    <span style="box-sizing: border-box; word-break: keep-all; overflow: hidden">
          <!--          {{ $store.state.tgWebApp }}-->
          <bold>{{ checkTgInitData }}</bold>
          <pre>TGWEBAPP: {{ tgWebApp }}</pre>
             <hr>
          <pre>USERDATA: {{ userData }}</pre>
            <hr>
          <pre>USERINITDATA: {{ tgUserInitData }}</pre>
        </span>
    <hr>
    <button @click="closeApp">Close</button>
    <button @click="showPopup">showPopup</button>
  </div>
</template>

<style scoped>

</style>
