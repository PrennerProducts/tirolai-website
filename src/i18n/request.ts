// src/i18n/request.ts
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  const locale = 'de'; // Oder dynamisch aus Header/Cookie/etc.

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
