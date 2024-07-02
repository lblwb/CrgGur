<template>
  <TwaMainLt>
    <template #Body>
      <div class="errorPage">
        <div class="errorPageBody">
<!--          <h1>{{ error.statusCode }}</h1>-->
          <h1 v-if="error.statusCode === 404">Page not found</h1>
          <h1 v-else>An error occurred</h1>
        </div>
      </div>
    </template>
  </TwaMainLt>
</template>

<script>
import TwaMainLt from "~/layout/twaMainLt.vue";

export default {
  props: {
    error: {
      type: Object,
      default: () => {
      },
    },
  },
  computed: {
    errorPage() {
      if (this.error.statusCode === 404) {
        // return error404;
      }
      // catch everything else
      // return error500;
    },
  },
  components: {
    TwaMainLt
  },
}
</script>
