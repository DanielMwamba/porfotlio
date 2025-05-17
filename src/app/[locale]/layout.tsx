import { ReactNode } from "react";
import { getStaticParams } from "@/locales/server";
import { I18nProviderClient } from "@/locales/client";

export function generateStaticParams() {
  return getStaticParams();
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: any; //  any pour contourner les vérifications de type strictes
}) {
  return (
    <I18nProviderClient locale={params.locale}>{children}</I18nProviderClient>
  );
}
