const routes = [
  {
    path: "/",
    component: () => import("layouts/VivaVida.vue"),
    children: [{ path: "/se", component: () => import("pages/SocioEconomics.vue") }]
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
