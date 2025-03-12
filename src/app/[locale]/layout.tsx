import { Header } from '@/components'
import { routing } from '@/i18n/routing'
import { clsx } from 'clsx'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server'
import { Open_Sans } from 'next/font/google'
import { notFound } from 'next/navigation'
import { ReactNode } from 'react'
import '../../style/global.scss'
import './styles.css'
// Import Swiper styles
import 'swiper/css'
type Props = {
  children: ReactNode
  params: Promise<{ locale: string }>
}

const OpenSans = Open_Sans({
  subsets: ['latin'],
  fallback: ['sans-serif'],
  display: 'swap',
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata(props: Omit<Props, 'children'>) {
  const { locale } = await props.params

  const t = await getTranslations({ locale, namespace: 'LocaleLayout' })

  return {
    title: t('title'),
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html className="h-full" lang={locale} dir="ltr">
      <body className={clsx(OpenSans.className, 'font-sans')}>
        <NextIntlClientProvider messages={messages}>
          {/* <Navigation /> */}
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="relative flex-grow">{children}</main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
