<template>
  <div v-if="loading" class="loading-page">
    <!-- <p>Loading...</p> -->
    <!-- <img src="~/assets/images/roulete-loading.gif" alt="" style="max-width: 420px; max-height: 420px;"> -->
    <div class="loading_wrapper">
      <div class="loading_logo">
        <!--        <img src="~/assets/images/logoapp.png">-->

        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="64px"
             height="64px" viewBox="0 0 128 128" xml:space="preserve"><script xmlns=""/>
          <script type="text/ecmascript" xlink:href="//faviconer.net/jscripts/smil.user.js"/>
          <g><path d="M75.4 126.63a11.43 11.43 0 0 1-2.1-22.65 40.9 40.9 0 0 0 30.5-30.6 11.4 11.4 0 1 1 22.27 4.87h.02a63.77 63.77 0 0 1-47.8 48.05v-.02a11.38 11.38 0 0 1-2.93.37z" fill="currentColor"/>
            <animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1600ms"
                              repeatCount="indefinite"/></g>
          <script xmlns=""/></svg>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    // getProjectName() {
    //
    // },
    disableScrolling() {
      var x = window.scrollX;
      var y = window.scrollY;
      window.onscroll = function () {
        window.scrollTo(x, y);
      };
    },
    enableScrolling() {
      window.onscroll = function () {
      };
    },
    start() {
      this.loading = true;
      this.disableScrolling();
    },
    finish() {
      this.loading = false;
      this.enableScrolling();
    },
  },
  computed: {
    // getProjectName() {
    //   setInterval(function () {
    //     setTimeout(function () {
    //       return this.$nuxt.context.app.head.description;
    //     }, 500);
    //     return "";
    //   }, 1000);
    // }
  }
};
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: #000000f0; */
  background: var(--bg-accent-color);
  opacity: 1;
  text-align: center;
  /* padding-top: 200px; */
  font-size: 30px;
  font-family: sans-serif;
  z-index: 120;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(1px);

  -moz-transition: all 0.8s ease-out; /* FF4+ */
  -o-transition: all 0.8s ease-out; /* Opera 10.5+ */
  -webkit-transition: all 0.8s ease-out; /* Saf3.2+, Chrome */
  -ms-transition: all 0.8s ease-out; /* IE10? */
  transition: all 0.8s ease-out;

}


.loading_wrapper {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

.loading-page .loading_logo {
  /*margin-bottom: 24px;*/
  color: var(--accent-comp-high-color);
}

.loading_text {
  font-size: 20px;
}

.loadingTitle {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 33px;
  color: var(--text-accent-color);
//opacity: 0.2;
}

</style>
