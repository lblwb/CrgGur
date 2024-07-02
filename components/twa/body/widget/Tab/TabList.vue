<template>
  <div class="MainBodyTabsBlock">
    <div class="MainBodyTabsWrapper">
      <div class="MainBodyTabsContext">
        <div class="MainBodyTabsContextWrapper">
          <slot name="tabItems"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "TabList"
}
</script>

<style scoped>
.MainBodyTabsBlock{
  margin-bottom: 20px;
}
.MainBodyTabsContextWrapper {
  display: flex;
  flex-flow: row;
  gap: 0 16px;
}
</style>
