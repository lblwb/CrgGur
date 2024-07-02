<template>
  <div class="MainBodyRequestNewTabsItem" @click="selectTab(tabId)" :class="{_Selected: tabSelected}">
    <div class="MainBodyRequestNewTabsItemBlock">
      <div class="MainBodyRequestNewTabsItemBlockBtn">
        <div class="blockHeading">
          <div class="blockHeadingTitle">
            {{ tabTitle }}
          </div>
        </div>
        <div class="blockSelectLine"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "TabListItem",
  props: {
    tabId: {
      type: String,
    },
    tabSelected: {
      type: Boolean
    },
    tabTitle: {
      type: String,
      default: ""
    }
  },
  methods: {
    selectTab(Id) {
      this.$emit("callSelectId", Id);
    }
  }
}
</script>

<style scoped>
.MainBodyRequestNewTabsItem {
  flex: 1;
}

.MainBodyRequestNewTabsItem._Selected {

}

.MainBodyRequestNewTabsItemBlockBtn {

}

.MainBodyRequestNewTabsItemBlockBtn .blockHeading {
  padding: 8px 0;
}

.MainBodyRequestNewTabsItemBlockBtn .blockHeading .blockHeadingTitle {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}


.MainBodyRequestNewTabsItem._Selected .MainBodyRequestNewTabsItemBlockBtn .blockSelectLine {
  border-bottom: solid 2px var(--accent-second-color);
}

.MainBodyRequestNewTabsItem._Selected .blockHeading .blockHeadingTitle {
  color: var(--accent-second-color);
}

</style>
