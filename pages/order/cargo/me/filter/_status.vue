<template>
  <TwaMainLt>
    <template #Body>
      Фильтруем Заявки в лк по статусу

      {{ $route.params}}
    </template>
  </TwaMainLt>
</template>
<script>
import TwaMainLt from "~/layout/twaMainLt.vue";

export default {
  name: "orderCargoMeFilterStatus",
  components: {TwaMainLt}
}
</script>


<style scoped>

</style>
