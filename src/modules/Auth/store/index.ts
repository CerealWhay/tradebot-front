import { defineStore } from "pinia";
import { useToastStore } from "@/store/toast";
import { AuthApi } from "../api";
import { ref } from "vue";
import { LoginDto } from "../api/dto/login";
import { RegistrationDto } from "../api/dto/registration";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore("auth", () => {
  const api = new AuthApi();
  const toastStore = useToastStore();
  const router = useRouter();

  const loading = ref<boolean>(false);

  const loginForm = ref<LoginDto>({
    username: "",
    password: "",
  });

  const registrationForm = ref<RegistrationDto>({
    username: "",
    password: "",
    passwordConfirm: "",
  });

  function isSignedIn(): boolean {
    return Boolean(localStorage.getItem("token"));
  }

  async function login(): Promise<void> {
    try {
      const response = await api.login(loginForm.value);

      localStorage.setItem("token", response.token);
      await router.push({ name: "Main" });
    } catch (e) {
      toastStore.showError(e);
    }
  }

  async function register(): Promise<void> {
    try {
      const response = await api.register(registrationForm.value);

      localStorage.setItem("token", response.token);
      await router.push({ name: "Main" });
    } catch (e) {
      toastStore.showError(e);
    }
  }

  async function logout(): Promise<void> {
    localStorage.removeItem("token");
    await router.push({ name: "LoginPage" });
  }

  function reset(): void {
    loginForm.value = {
      username: "",
      password: "",
    };

    registrationForm.value = {
      username: "",
      password: "",
      passwordConfirm: "",
    };
  }

  return {
    loading,
    loginForm,
    registrationForm,
    isSignedIn,
    login,
    register,
    logout,
    reset,
  };
});
