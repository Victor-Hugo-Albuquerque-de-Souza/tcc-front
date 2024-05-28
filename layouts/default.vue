<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>
    <!-- COMPONENTE DE COLUNA DO DASHBOARD: -->
    <side-bar
      :background-color="sidebarBackground"
      short-title="pimenta"
      title="pimenta"
    >
      <template slot-scope="props" slot="links">
        <sidebar-item
          :link="{
            name: $t('sidebar.dashboard'),
            icon: 'tim-icons icon-chart-pie-36',
            path: '/'
          }"
        >
        </sidebar-item>
        <sidebar-item
          :link="{
            name: $t('sidebar.userProfile'),
            icon: 'tim-icons icon-single-02',
            path: '/user' }"
        >
        </sidebar-item>
        <sidebar-item
          :link="{
            name: 'produtos',
            icon: 'tim-icons icon-tag',
            path: '/produtos' }"
        >
          <!-- <svg
            slot="svgIcon"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="30"
            viewBox="0 0 100 100"
            xml:space="preserve"
            class="mr-2"
          >
              <g>
              <g>
                <path d="M22,66h5c1.1,0,2-0.9,2-2V33c0-1.1-0.9-2-2-2h-5c-1.1,0-2,0.9-2,2v31C20,65.1,20.9,66,22,66z"/>
              </g>
              <g>
                <path d="M78,31h-5c-1.1,0-2,0.9-2,2v31c0,1.1,0.9,2,2,2h5c1.1,0,2-0.9,2-2V33C80,31.9,79.1,31,78,31z"/>
              </g>
              <g>
                <path d="M53,66c1.1,0,2-0.9,2-2V33c0-1.1-0.9-2-2-2h-6c-1.1,0-2,0.9-2,2v31c0,1.1,0.9,2,2,2H53z"/>
              </g>
              <g>
                <path d="M65,66c1.1,0,2-0.9,2-2V33c0-1.1-0.9-2-2-2h-2c-1.1,0-2,0.9-2,2v31c0,1.1,0.9,2,2,2H65z"/>
              </g>
              <g>
                <path d="M39,66c1.1,0,2-0.9,2-2V33c0-1.1-0.9-2-2-2h-2c-1.1,0-2,0.9-2,2v31c0,1.1,0.9,2,2,2H39z"/>
              </g>
              <g>
                <path d="M78,72H22c-1.1,0-2,0.9-2,2v2c0,1.1,0.9,2,2,2h56c1.1,0,2-0.9,2-2v-2C80,72.9,79.1,72,78,72z"/>
              </g>
              <g>
                <path d="M78,20H22c-1.1,0-2,0.9-2,2v2c0,1.1,0.9,2,2,2h56c1.1,0,2-0.9,2-2v-2C80,20.9,79.1,20,78,20z"/>
              </g>
            </g>
          </svg> -->
        </sidebar-item>
      </template>
    </side-bar>
    <!-- BOTÃO DE CONFIG QUE APARECE A DIREITA: -->
    <sidebar-share :background-color.sync="sidebarBackground"> </sidebar-share>
    <!-- CONTEÚDO DO TOPO + NUXT CHILD: -->
    <div class="main-panel" :data="sidebarBackground">
      <!-- BARRA POSICIONADA NO TOPO DA PÁGINA - TÍTULO + SOCIAL BAR A DIREITA: -->
      <dashboard-navbar></dashboard-navbar>
      <router-view name="header"></router-view>
      <!-- A ÁREA ONDE O FILHO RENDERIZA NO LAYOUT: -->
      <div
        :class="{ content: !isFullScreenRoute }"
        @click="toggleSidebar"
      >
        <zoom-center-transition :duration="200" mode="out-in">
          <!-- your content here -->
          <nuxt></nuxt>
        </zoom-center-transition>
      </div>
    </div>
    <div class="w-0 h-0">
      <div class="position-fixed bottom-0 right-0">
        <base-alert v-if="$store.state.tools.alert.hasAlert" @dismissAlert="$store.commit('HANDLE_TOOLS_ALERT', false)" :type="$store.state.tools.alert.type" dismissible>
            <span
                ><b> {{ $store.state.tools.alert.header }} - </b> {{ $store.state.tools.alert.text }} </span
            >
        </base-alert>
      </div>
    </div>
  </div>
</template>
<script>
  /* eslint-disable no-new */
  import PerfectScrollbar from 'perfect-scrollbar';
  import 'perfect-scrollbar/css/perfect-scrollbar.css';
  import SidebarShare from '@/components/Layout/SidebarSharePlugin';
  import DashboardNavbar from '@/components/Layout/DashboardNavbar.vue';
  import DashboardContent from '@/components/Layout/Content.vue';
  import { SlideYDownTransition, ZoomCenterTransition } from 'vue2-transitions';
  function hasElement(className) {
    return document.getElementsByClassName(className).length > 0;
  }
  function initScrollbar(className) {
    if (hasElement(className)) {
      new PerfectScrollbar(`.${className}`);
    } else {
      // try to init it later in case this component is loaded async
      setTimeout(() => {
        initScrollbar(className);
      }, 100);
    }
  }
  export default {
    components: {
      DashboardNavbar,
      DashboardContent,
      SlideYDownTransition,
      ZoomCenterTransition,
      SidebarShare
    },
    data() {
      return {
        sidebarBackground: 'vue' //vue|blue|orange|green|red|primary
      };
    },
    computed: {
      isFullScreenRoute() {
        return this.$route.path === '/maps/full-screen'
      }
    },
    methods: {
      toggleSidebar() {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false);
        }
      },
      initScrollbar() {
        let docClasses = document.body.classList;
        let isWindows = navigator.platform.startsWith('Win');
        if (isWindows) {
          // if we are on windows OS we activate the perfectScrollbar function
          initScrollbar('sidebar');
          initScrollbar('main-panel');
          initScrollbar('sidebar-wrapper');

          docClasses.add('perfect-scrollbar-on');
        } else {
          docClasses.add('perfect-scrollbar-off');
        }
      }
    },
    mounted() {
      this.initScrollbar();
    }
  };
</script>
<style lang="scss">
  $scaleSize: 0.95;
  @keyframes zoomIn95 {
    from {
      opacity: 0;
      transform: scale3d($scaleSize, $scaleSize, $scaleSize);
    }
    to {
      opacity: 1;
    }
  }

  .main-panel .zoomIn {
    animation-name: zoomIn95;
  }

  @keyframes zoomOut95 {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: scale3d($scaleSize, $scaleSize, $scaleSize);
    }
  }

  .main-panel .zoomOut {
    animation-name: zoomOut95;
  }
</style>
