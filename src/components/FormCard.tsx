import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export function FormCard({
  children,
  title,
  footer,
  ...props
}: {
  children: React.ReactNode;
  footer: React.ReactNode;
  title: string;
} & React.ComponentProps<typeof Card>) {
  const { t } = useTranslation();

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle className="flex justify-between">
          <div className="text-xl">{title}</div>
          <Link className="text-sm" to="/">{t("app.goBack")}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>{footer}</CardFooter>
    </Card>
  );
}
