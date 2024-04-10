<template>
  <head>
    <title>Login Admin</title>
  </head>
  <Form
    @submit="submitSignIn"
    :validation-schema="signInFormSchema"
    style="height: 100%"
  >
    <div
      class="d-flex justify-content-center align-items-center"
      style="height: 100%"
    >
      <div class="w-25 p-4 formlogin">
        <h3 class="text-center mt-5 text-primary fw-bold">ĐĂNG NHẬP</h3>
        <div class="form-group">
          <label for="username">Tài khoản</label>
          <Field
            name="username"
            type="text"
            class="form-control"
            v-model="signInLocal.username"
          />
          <ErrorMessage name="username" class="error-feedback" />
        </div>
        <div class="form-group">
          <label for="password">Mật khẩu</label>
          <Field
            name="password"
            type="password"
            class="form-control"
            v-model="signInLocal.password"
          />
          <ErrorMessage name="password" class="error-feedback" />
        </div>
        <div class="form-group text-center">
          <button class="btn btn-primary">Đăng nhập</button>
        </div>
      </div>
    </div>
  </Form>
</template>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
import { defineComponent, reactive } from "vue";
export default defineComponent({
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  setup(props, context) {
    const signInLocal = reactive({
      username: "",
      password: "",
    });
    const signInFormSchema = yup.object().shape({
      username: yup.string().required("Username không được để trống."),
      password: yup.string().required("Mật khẩu không được để trống."),
    });
    const submitSignIn = () => {
      context.emit("submit:signin", signInLocal);
    };
    return {
      signInLocal,
      signInFormSchema,
      submitSignIn,
    };
  },
});
</script>

<style scoped>
@import "@/assets/form.css";
</style>
