const state = {
  drawer: true,
  gradient: 'rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)',
  items: [
    {
      title: 'Dashboard',
      icon: 'mdi-view-dashboard',
      to: '/',
    },
    {
      title: 'Pages',
      icon: 'mdi-menu',
      items: [
        {
          title: 'Authentication',
          icon: 'mdi-key',
          items: [
            { title: 'Sign In', icon: 'mdi-login', to: '/auth/signin' },
            { title: 'Sign Up', icon: 'mdi-logout', to: '/auth/signup' },
          ],
        },
        {
          title: 'Product List',
          icon: 'mdi-reproduction',
          to: '/page/product-list',
        },
      ],
    },

    { title: 'Grid System', icon: 'mdi-image', to: '/grid-system' },
    { title: 'Grid List Page', icon: 'mdi-image', to: '/grid-list-page' },
    { title: 'Breakpoints', icon: 'mdi-image', to: '/breakpoints' },
    { title: 'Typography', icon: 'mdi-image', to: '/typography' },

    {
      title: 'Tables',
      icon: 'mdi-table-settings',
      items: [
        {
          title: 'App Table',
          to: '/tables/app-table',
        },
        {
          title: 'Basic Table',
          to: '/tables/basic-table',
        },
      ],
    },
    {
      title: 'Forms',
      icon: 'mdi-form-select',
      items: [
        {
          title: 'App Form',
          to: '/forms/app-form',
        },
        {
          title: 'Form Validation',
          to: '/forms/form-validation',
        },
      ],
    },
    { title: 'Buttons', icon: 'mdi-gesture-tap-button', to: '/buttons' },
    { title: 'Icons', icon: 'mdi-emoticon-excited-outline', to: '/icons' },
  ],
};

const getters = {
  getDrawer: state => state.drawer,
};

const mutations = {
  setDrawer(state, payload) {
    state.drawer = payload;
  },
};

const actions = {
  toggleDrawer({ commit }, value) {
    commit('setDrawer', value);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};