<template>
  <div class="page admin" style="height: 100vh">
    <div class="loginadmin">
      <SignInForm @submit:signin="submitSignIn" />
      <p class="text-center text-danger">{{ message }}</p>
    </div>
  </div>
</template>
<script>
import adminService from "@/services/admin.service";
import SignInForm from "@/components/admin/SignInForm.vue";
import { defineComponent, ref } from "vue";
import { useAdminStore } from "@/stores/store";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    SignInForm,
  },
  setup() {
    const store = useAdminStore();
    const router = useRouter();
    const message = ref("");
    const submitSignIn = async (data) => {
      try {
        const response = await adminService.signIn(data);
        const token = response.token;
        localStorage.setItem("token", token);
        store.setIsAuthenticatedAdmin(true);
        router.push({ name: "admin.dashboard.show" });
      } catch (error) {
        console.log(error);
        message.value = "Tài khoản hoặc mật khẩu không đúng. Vui lòng thử lại.";
      }
    };
    return {
      store,
      message,
      submitSignIn,
    };
  },
});
</script>
