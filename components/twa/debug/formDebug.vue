<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "formDebug",
  props:{
    form:{
      type: Object
    }
  }
})
</script>

<template>
    <pre style="box-sizing: border-box; width: 100%;word-break: break-all; text-wrap: balance; word-wrap: anywhere;">
       {{ form.buyout }}
    </pre>
</template>

<style scoped>

</style>
