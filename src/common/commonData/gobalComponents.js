import Vue from 'vue'
import selectSearch from '@/components/selectSearch'
import standardTable from '@/common/components/standardTable'
import drawer from '@/components/drawer'
import drawerEdit from '@/components/drawerMode/drawerEdit'
import drawerView from '@/components/drawerMode/drawerView'
Vue.component('select-search', selectSearch)
Vue.component('standard-table', standardTable)
Vue.component('drawer', drawer)
Vue.component('drawer-edit', drawerEdit)
Vue.component('drawer-view', drawerView)
