import localFont from 'next/font/local'

export const GrotekMxRwnd = localFont({
  variable: "--font-grotek-mx-rwnd",
  src: [
    {
      path: './GrotekMxRwnd-Hairline.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './GrotekMxRwnd-Thin.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './GrotekMxRwnd-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './GrotekMxRwnd-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './GrotekMxRwnd-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './GrotekMxRwnd-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './GrotekMxRwnd-Black.ttf',
      weight: '900',
      style: 'normal',
    }
  ],
});