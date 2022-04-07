<template>
	<div
    class="e-layout-inside-tabs"
    :class="{
      'e-layout-inside-tabs-fix': tabsFixed
    }"
  >
    <div class="e-layout-inside-tabs-wrap">
        <span class="tabs-button tabs-button__prev" :class="{'tabs-button__prev': scrollable}">a</span>
        <span class="tabs-button tabs-button__next" :class="{'tabs-button__next': scrollable}">b</span>
        <div class="tabs-wrap-scroll">
          <Draggable :list="tabsList" animation="300" item-key="fullPath" class="flex">
            <template #item="{ element }">
              <div
                class="tabs-wrap-scroll-item"
                :class="{ 'tabs-wrap-scroll-item__active': currentPath === element.path }"
                @click.stop="goPage(item)"
                @contextmenu="handleContextMenu($event, item)"
              >
                <span>{{ element.name }}</span>
              </div>
            </template>
          </Draggable>
        </div>
    </div>

  </div>
</template>
<script>
export default {
	name: 'EHeaderTabs'
}
</script>
<script setup>
import Draggable from 'vuedraggable'
const tabsFixed = true
const scrollable = false
const tabsList = [
  {
    name: 'dashboard',
    id: 1,
    path: '/a'
  },
  {
    name: 'system',
    id: 2,
    path: '/b'
  }
]
const currentPath = '/a'
const goPage = item => {
  console.log(item)
}
const handleContextMenu = () => {

}
</script>

