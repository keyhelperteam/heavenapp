import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Android Beta — Get Early Access',
  description:
    'HeavenApp for Android is currently in closed beta. Sign up with your email to get early access to memorial profiles, virtual candles, flower sending, and more.',
  openGraph: {
    title: 'HeavenApp Android Beta — Get Early Access',
    description:
      'Be among the first to try HeavenApp on Android. Memorial profiles, virtual candles, flower sending, cemetery locations, and more.',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function AndroidBetaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
