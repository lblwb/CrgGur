<template>
  <div class="InfoCntBlockBtn" @click="clicked">
    <div class="InfoCntBlockBtnHeading">
      <div class="InfoCntBlockBtnHeadingWrapper">
        <div class="InfoCntBlockBtnHeadingTitle">
          {{ titleCount }}
        </div>
        <div class="InfoCntBlockBtnHeadingIcon">
          <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.79988 7.93785C9.79988 8.34619 9.64238 8.75452 9.33321 9.06369L5.52988 12.867C5.36071 13.0362 5.08071 13.0362 4.91154 12.867C4.74238 12.6979 4.74238 12.4179 4.91154 12.2487L8.71488 8.44535C8.99488 8.16535 8.99488 7.71035 8.71488 7.43035L4.91154 3.62702C4.74238 3.45785 4.74238 3.17785 4.91154 3.00869C5.08071 2.83952 5.36071 2.83952 5.52988 3.00869L9.33321 6.81202C9.64238 7.12119 9.79988 7.52952 9.79988 7.93785Z"
              fill="#717171" stroke="#717171" stroke-width="0.5"/>
          </svg>
        </div>
      </div>
      <div class="InfoCntBlockBtnHeadingTitleDesc">
        {{ titleDescCount }}
      </div>
    </div>

    <!--    {{progressPercent}}-->

    <div class="InfoCtnBlockProgress">
      <progress id="progress-bar" :value="progressPercent" max="100">{{ progressPercent }} %</progress>
    </div>

    <div class="InfoCntBlockBtnDesc">
      <div class="InfoCntBlockBtnDescWrapper">
        <div class="InfoCntBlockBtnDescText">
          {{ descInfo }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "InfoCntBlockBtn",
  props: {
    counter: {
      type: Number,
      default: 0
    },
    titleCount: {
      type: String,
      default: ""
    },
    titleDescCount: {
      type: String,
      default: ""
    },
    descInfo: {
      type: String,
      default: ""
    }
  },
  methods: {
    clicked() {
      // console.log(this.titleCount, this.titleDescCount, this.descInfo);
      this.$emit("callClick");
    }
  },
  computed: {
    progressPercent() {
      return this.counter - ((this.counter / 100));
    }
  }
}
</script>


<style scoped>
.InfoCntBlockBtn {
  flex: 1;
  border-radius: 10px;
  border: 1px solid var(--bg-second-color);
  box-sizing: border-box;
  padding: 10px 12px;
}

.InfoCntBlockBtn:focus,
.InfoCntBlockBtn:hover {
  background: var(--bg-second-color);
}

.InfoCntBlockBtn .InfoCntBlockBtnHeading {
  margin-bottom: 8px;
}

.InfoCntBlockBtn .InfoCntBlockBtnHeading .InfoCntBlockBtnHeadingWrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.InfoCntBlockBtnHeadingTitle {
  color: var(--bg-primary-color);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 36px */
  letter-spacing: -0.72px;
  margin-bottom: 8px;
}

.InfoCntBlockBtnHeadingTitleDesc {
  color: var(--text-accent-color);
  font-size: 11px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 18px */
  letter-spacing: -0.24px;
  word-break: break-all;
  overflow: hidden;
  white-space: nowrap;
  text-trim: normal;
  text-overflow: ellipsis;
}

.InfoCtnBlockProgress {

}

.InfoCtnBlockProgress progress {
  width: 100%;
  margin-bottom: 8px;
  border-radius: 14px;
  overflow: hidden;
  block-size: 1.2vh !important;
  inline-size: 100%;
  display: flex;
}

.InfoCtnBlockProgress progress::-webkit-progress-bar {
  background: #E7E7E7;
}

.InfoCtnBlockProgress progress::-webkit-progress-value {
  background: var(--accent-comp-high-color);
}

.InfoCtnBlockProgress progress::-webkit-progress-value {
  background: var(--accent-comp-high-color);
  border-radius: 8px;
}

.InfoCntBlockBtnDesc {

}

.InfoCntBlockBtnDesc .InfoCntBlockBtnDescWrapper {

}

.InfoCntBlockBtnDesc .InfoCntBlockBtnDescText {
  color: var(--text-second-color);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  /*line-height: normal; letter-spacing: -0.24px; line-height: 140%;*/
}

</style>
