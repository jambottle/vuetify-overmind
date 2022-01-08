const state = {
  drawer: true,
  gradient: "rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)",
  items: [
    {
      title: "Dashboard",
      icon: "mdi-view-dashboard",
      to: "/",
    },
    {
      title: "Exercises",
      icon: "mdi-view-quilt",
      items: [
        {
          title: "Grid System",
          icon: "mdi-image-multiple",
          to: "/grid-system",
        },
        {
          title: "Grid List Page",
          icon: "mdi-image-multiple",
          to: "/grid-list-page",
        },
        {
          title: "Breakpoints",
          icon: "mdi-image-filter-none",
          to: "/breakpoints",
        },
        {
          title: "Typography",
          icon: "mdi-image-filter-none",
          to: "/typography",
        },
        {
          title: "Tables",
          icon: "mdi-table",
          items: [
            {
              title: "App Table",
              to: "/tables/app-table",
            },
            {
              title: "Basic Table",
              to: "/tables/basic-table",
            },
          ],
        },
        {
          title: "Forms",
          icon: "mdi-table-edit",
          items: [
            {
              title: "App Form",
              to: "/forms/app-form",
            },
            {
              title: "Form Validation",
              to: "/forms/form-validation",
            },
          ],
        },
        { title: "Buttons", icon: "mdi-gesture-tap-button", to: "/buttons" },
        { title: "Icons", icon: "mdi-emoticon-excited-outline", to: "/icons" },
      ],
    },
    {
      title: "Pages",
      icon: "mdi-view-stream",
      items: [
        {
          title: "Authentication",
          icon: "mdi-account",
          items: [
            { title: "Sign In", icon: "mdi-login", to: "/auth/signin" },
            { title: "Sign Up", icon: "mdi-logout", to: "/auth/signup" },
          ],
        },
        {
          title: "Product List",
          icon: "mdi-cards-variant",
          to: "/page/product-list",
        },
      ],
    },
    {
      title: "알림센터",
      icon: "mdi-checkbox-blank-badge-outline",
      items: [
        {
          title: "이벤트 관리 콘솔",
          icon: "mdi-calendar-alert",
          to: "/events",
        },
        {
          title: "알림 발송 목록",
          icon: "mdi-bell-ring",
          to: "/notifications",
        },
      ],
    },
  ],
};

const getters = {
  getDrawer: (state) => state.drawer,
};

const mutations = {
  setDrawer(state, payload) {
    state.drawer = payload;
  },
};

const actions = {
  toggleDrawer({ commit }, payload) {
    commit("setDrawer", payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
