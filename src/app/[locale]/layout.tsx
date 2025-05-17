import { ReactNode } from "react";
import { getStaticParams } from "@/locales/server";
import { I18nProviderClient } from "@/locales/client";

export function generateStaticParams() {
  return getStaticParams();
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
}
