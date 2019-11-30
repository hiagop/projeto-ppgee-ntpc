import Store from "../store";

const store = Store();
console.log(store);

const routes = [
  {
    path: "/",
    component: () => import("layouts/VivaVida.vue"),
    children: [
      { path: "/", component: () => import("pages/Index.vue") },
      {
        path: "/login",
        component: () => import("pages/Login.vue"),
        beforeEnter: (to, from, next) => {
          console.log(store.getters);
          return store.getters.isAuthenticated ? next({ path: "/" }) : next();
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
      {
        path: "/bdi",
        component: () => import("pages/BdiQuestionnaire.vue"),
        beforeEnter: (to, from, next) => {
          return store.getters.isAuthenticated
            ? next()
            : next({ path: "/login" });
        }
      },
      { path: "/result", component: () => import("pages/Result.vue") }
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
