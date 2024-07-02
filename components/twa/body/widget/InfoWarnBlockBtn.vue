<template>
  <div class="InfoWarnBlockBtn" @click="clicked">
    <div class="InfoWarnBlockBtnWrapper">
      <div class="InfoWarnBlockBtnHeading">
        <div class="InfoWarnBlockBtnHeadingWrapper">
          <div class="InfoWarnBlockBtnHeadingTitle">
            {{ titleWarn }}
          </div>
          <div class="InfoWarnBlockBtnHeadingDesc">
            {{ titleWarn }}
          </div>
        </div>
      </div>
      <div class="InfoWarnBlockBtnIconBlock">
        <div class="InfoWarnBlockBtnIconBlockWrapper">
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 9.93806H12.01M11 12.9381H12V16.9381H13M19.875 7.20807C20.575 7.60607 21.005 8.35107 21 9.15607V16.4401C21 17.2491 20.557 17.9951 19.842 18.3881L13.092 22.6581C12.7574 22.8418 12.3818 22.9381 12 22.9381C11.6182 22.9381 11.2426 22.8418 10.908 22.6581L4.158 18.3881C3.80817 18.1969 3.51612 17.9152 3.31241 17.5725C3.1087 17.2299 3.0008 16.8387 3 16.4401V9.15507C3 8.34607 3.443 7.60107 4.158 7.20807L10.908 3.22807C11.2525 3.0381 11.6396 2.93848 12.033 2.93848C12.4264 2.93848 12.8135 3.0381 13.158 3.22807L19.908 7.20807H19.875Z"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "InfoWarnBlockBtn",
  props: {
    titleWarn: {
      type: String,
      default: ""
    },
    descWarn: {
      type: String,
      default: ""
    }
  },
  methods: {
    clicked() {
      // console.log(this.titleCount, this.titleDescCount, this.descInfo);
      this.$emit("callClick");
    }
  }
}
</script>


<style scoped>
.InfoWarnBlockBtn {
  flex: 1;
  border-radius: var(--block-brd-rds-main);
  border: 1px solid var(--bg-second-color);
  box-sizing: border-box;
  padding: 16px 18px;
  background: #fff;
}

.InfoWarnBlockBtnWrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.InfoWarnBlockBtn:focus,
.InfoWarnBlockBtn:hover {
  background: var(--bg-second-color);
}

.InfoWarnBlockBtn .InfoWarnBlockBtnHeading {
  margin-bottom: 8px;
  display: flex;
  align-items: center;
}

.InfoWarnBlockBtn .InfoWarnBlockBtnHeading .InfoWarnBlockBtnHeadingWrapper {
  width: 100%;
}

.InfoWarnBlockBtnHeadingTitle {
  color: var(--text-accent-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 18px */
  letter-spacing: -0.24px;
  word-break: break-all;
  overflow: hidden;
  white-space: nowrap;
  text-trim: normal;
  text-overflow: ellipsis;
  margin-bottom: 6px;
}


.InfoWarnBlockBtnHeading .InfoWarnBlockBtnHeadingDesc {
  color: var(--text-second-color);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
}

.InfoWarnBlockBtnIconBlock{
  width: 48px;
  height: 48px;
  background: var(--accent-second-color);
  border-radius: 18px;
  color: var(--text-primary-color);
}

.InfoWarnBlockBtnIconBlock .InfoWarnBlockBtnIconBlockWrapper{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

</style>
