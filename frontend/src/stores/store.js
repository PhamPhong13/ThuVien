import { defineStore, createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'


const persistedStateAdmin = createPersistedState({
    key: 'PiniaPersistedstateAdmin',
    paths: ['isAuthenticatedAdmin'],
    storage: localStorage,
});

const persistedStateCustomer = createPersistedState({
    key: 'PiniaPersistedstateCustomer',
    paths: ['isAuthenticatedCustomer'],
    storage: localStorage,
});

const pinia1 = createPinia();
const pinia2 = createPinia();
pinia1.use(persistedStateAdmin);
pinia2.use(persistedStateCustomer);

export const useAdminStore = defineStore({
    id: 'AdminAuthenticated',
    state: () => ({
        isAuthenticatedAdmin: false,
    }),
    actions: {
        setIsAuthenticatedAdmin(isAuthenticatedAdmin) {
            this.isAuthenticatedAdmin = isAuthenticatedAdmin;
        },
    },
    persist: true,
});
export const useCustomerStore = defineStore({
    id: 'CustomerAuthenticated',
    state: () => ({
        isAuthenticatedCustomer: false,
    }),
    actions: {
        setIsAuthenticatedCustomer(isAuthenticatedCustomer) {
            this.isAuthenticatedCustomer = isAuthenticatedCustomer;
        },
    },
    persist: true,
});