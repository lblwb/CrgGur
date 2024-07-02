<template>
  <TwaMainLt>
    <template #Body>
      <div class="errorPage">
        <div class="errorPageBody">
          <h2>{{ error.statusCode }}</h2>
        </div>
      </div>
    </template>
  </TwaMainLt>
</template>

<script>
import TwaMainLt from "~/layout/twaMainLt.vue";

export default {
  messages: {
    loading: 'Loading...',
    error_404: 'This page could not be found',
    server_error: 'Server error',
    nuxtjs: 'service loading.. .',
    back_to_home: 'Back to the home page',
    server_error_details:
      'An error occurred in the application and your page could not be served. If you are the application owner, check your logs for details.',
    client_error: 'Error',
    client_error_details:
      'An error occurred while rendering the page. Check developer tools console for details.'
  },
  props: {
    error: {
      type: Object
    }
  },
  methods: {
    handleError() {
      // clearError({redirect: '/'})
    }
  },
  components: {
    TwaMainLt
  }
}
</script>
