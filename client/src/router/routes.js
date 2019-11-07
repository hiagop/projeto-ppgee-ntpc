const routes = [
  {
    path: "/",
    component: () => import("layouts/VivaVida.vue"),
    children: [
      { path: "/", component: () => import("pages/Index.vue") },
      {
        path: "/login",
        component: () => import("pages/Login.vue")
        // beforeEnter: (to, from, next) => {
        //   return this.$auth.isAuthenticated
        //     ? next({ path: "/" })
        //     : next({ path: "/login" });
        // }
      },

      {
        path: "/bdi",
        component: () => import("pages/BdiQuestionnaire.vue"),
        beforeEnter: (to, from, next) => {
          return this.$auth.isAuthenticated
            ? next({ path: "/bdi" })
            : next({ path: "/login" });
        }
      },
      {
        path: "/termos-de-privacidade",
        component: () => import("pages/PrivacyTerms.vue")
      },
      {
        path: "/termos-de-servico",
        component: () => import("pages/ServiceTerms.vue")
      },

      { path: "/se", component: () => import("pages/SocioEconomics.vue") }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
