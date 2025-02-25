import { login, register } from "@/api/auth";
import { FormCard } from "@/components/FormCard";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { toast, Toaster } from "sonner";

export function LoginPage() {
  const form = useForm<{
    username: string;
    password: string;
  }>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { t } = useTranslation();

  async function onSubmit(values: {
    username: string;
    password: string;
  }) {
    try {
      const { data } = await login(values);

      toast(t("app.welcome$", { name: data.name }), {
        closeButton: true,
      });
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.log("114514");
      }
    }
  }

  return (
    <div>
      <FormCard
        title={t("app.login")}
        className="w-96"
        footer={
          <Link
            className="text-slate-700 underline decoration-dashed text-sm"
            to="/auth/register"
          >
            {t("app.toRegister")}
          </Link>
        }
      >
        <Form {...form}>
          <form
            className="flex flex-col gap-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              name="username"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("app.usernameOrEmail")}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("app.password")}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button>{t("app.login")}</Button>
          </form>
        </Form>
      </FormCard>
      <Toaster />
    </div>
  );
}

export function RegisterPage() {
  const form = useForm<{
    username: string;
    email: string;
    password: string;
    passwordConfirmation: string;
  }>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
  });
  const { t } = useTranslation();

  async function onSubmit(values: {
    username: string;
    email: string;
    password: string;
    passwordConfirmation: string;
  }) {
    try {
      const { data } = await register(values);

      console.log(data);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.log("114514");
      }
    }
  }

  return (
    <div>
      <FormCard
        title={t("app.register")}
        className="w-96"
        footer={
          <Link
            className="text-slate-700 underline decoration-dashed text-sm"
            to="/auth/login"
          >
            {t("app.toLogin")}
          </Link>
        }
      >
        <Form {...form}>
          <form
            className="flex flex-col gap-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              name="username"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("app.username")}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("app.email")}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("app.password")}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="passwordConfirmation"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("app.passwordConfirmation")}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button>{t("app.register")}</Button>
          </form>
        </Form>
      </FormCard>
      <Toaster />
    </div>
  );
}
