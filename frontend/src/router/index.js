import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFoundPage.vue"),
    },
    {
        path: "/admin/signup",
        name: "admin.signup",
        component: () => import("@/views/admin/SignUp.vue"),
    },
    {
        path: "/admin/signin",
        name: "admin.signin",
        component: () => import("@/views/admin/SignIn.vue"),
    },

    //ADMIN
    {
        path: "/admin",
        component: () => import("@/components/admin/AdminHomePage.vue"),
        beforeEnter: (to, from, next) => {
            const token = localStorage.getItem("token");
            const isAuthenticatedAdmin = JSON.parse(localStorage.getItem("AdminAuthenticated"));
            if (isAuthenticatedAdmin && isAuthenticatedAdmin.isAuthenticatedAdmin === true && token) {
              next();
            } else {
              next({ name: 'admin.signin' });
            }
        },          
        children: [
            {
                path: "/admin/dashboard",
                name: "admin.dashboard.show",
                component: () => import("@/views/admin/DashBoardOverView.vue"),
            },
            {
                path: "/admin/category",
                name: "admin.category.all",
                component: () => import("@/views/admin/CategoryOverView.vue"),
            },
            {
                path: "/admin/category",
                name: "admin.category.add",
                component: () => import("@/views/admin/CategoryAdd.vue"),
            },

            {
                path: "/admin/category/:id",
                name: "admin.category.edit",
                component: () => import("@/views/admin/CategoryEdit.vue"),
                props: true,
            },
            {
                path: "/admin/product",
                name: "admin.product.all",
                component: () => import("@/views/admin/ProductOverView.vue"),
            },

            {
                path: "/admin/product",
                name: "admin.product.add",
                component: () => import("@/views/admin/ProductAdd.vue"),
            },

            {
                path: "/admin/product/:id",
                name: "admin.product.edit",
                component: () => import("@/views/admin/ProductEdit.vue"),
                props: true
            },
            {
                path: "/admin/customer",
                name: "admin.customer.all",
                component: () => import("@/views/admin/CustomerOverView.vue"),
            },

            {
                path: "/admin/order",
                name: "admin.order.all",
                component: () => import("@/views/admin/OrderOverView.vue"),
            },

            {
                path: "/admin/order/:id",
                name: "admin.order.detail",
                component: () => import("@/views/admin/OrderDetail.vue"),
                props: true
            },  
        ]
    },

    //KHÁCH HÀNG
    {
        path: "/",
        component: () => import("@/views/customer/CustomerPage.vue"),
        children: [
            {
                path: "/",
                name: "home",
                component: () => import("@/components/customer/Home.vue"),
            },
            {
                path: "/product",
                name: "product",
                component: () => import("@/views/customer/Product.vue"),
            },
            {
                path: "/about",
                name: "about",
                component: () => import("@/views/customer/About.vue"),
            },
            {
                path: "/contact",
                name: "contact",
                component: () => import("@/views/customer/Contact.vue"),
            },
            {
                path: "/cart",
                name: "cart",
                component: () => import("@/views/customer/Cart.vue"),
            },
            {
                path: "/order",
                name: "order",
                component: () => import("@/views/customer/Order.vue"),
            },
            {
                path: "/signup",
                name: "signup",
                component: () => import("@/views/customer/SignUp.vue"),
            },
            {
                path: "/signin",
                name: "signin",
                component: () => import("@/views/customer/SignIn.vue"),
            },
            {
                path: "/order/:id",
                name: "customer.order.detail",
                component: () => import("@/views/customer/OrderDetail.vue"),
                props: true
            },  
        ]
    },

];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});


export default router;