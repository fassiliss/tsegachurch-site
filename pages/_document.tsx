import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en" suppressHydrationWarning>
            <Head />
            <body suppressHydrationWarning>
            {/* Set theme BEFORE React hydrates */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
(function () {
  try {
    var saved = localStorage.getItem('theme'); // "dark" | "light"
    var prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    var isDark = saved ? saved === 'dark' : prefersDark;

    if (isDark) document.documentElement.classList.add('dark-mode');
    else document.documentElement.classList.remove('dark-mode');
  } catch (e) {}
})();
            `,
                }}
            />
            <Main />
            <NextScript />
            </body>
        </Html>
    );
}
