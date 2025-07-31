import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const poppins = Poppins({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Polly Pei - 專業前端開發者 | 創造卓越數位體驗',
  description: '專業前端開發者與 UI/UX 設計師，致力於打造令人難忘的數位體驗和高效的網頁應用。擅長 React、Next.js、TypeScript 等現代技術。',
  keywords: ['前端開發', 'React', 'Next.js', 'TypeScript', 'UI/UX設計', 'Web開發', '台灣'],
  authors: [{ name: 'Polly Pei' }],
  creator: 'Polly Pei',
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    url: 'https://pollypei.dev',
    title: 'Polly Pei - 專業前端開發者',
    description: '創造卓越數位體驗的專業前端開發者',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Polly Pei - 專業前端開發者',
    description: '創造卓越數位體驗的專業前端開發者',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
