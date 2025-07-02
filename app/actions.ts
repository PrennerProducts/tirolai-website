'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import type { Locale } from '../lib/locale';

/**
 * Server action to set the NEXT_LOCALE cookie and redirect.
 */
export async function setLocale(locale: Locale) {
  (await cookies()).set('NEXT_LOCALE', locale);
  redirect('/');
}
