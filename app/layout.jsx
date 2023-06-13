import '@styles/global.css';
import { Children } from 'react';

export const metadata = {
    title: "promtsearch",
    description: "Discover & Share AI Promts"
}

const RootLayout = () => {
  return (
    <html Lang="en">
        <body>
            <div className="main">
                <div className="gradient"/>
            </div>
            <main className="app">
                {Children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout