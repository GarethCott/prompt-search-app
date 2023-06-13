import '@styles/globals.css';
import { children } from 'react';

export const metadata = {
    title: "promtsearch",
    description: "Discover & Share AI Promts"
}

const RootLayout = ({children}) => {
  return (
    <html Lang="en">
        <body>
            <div className="main">
                <div className="gradient"/>
            </div>
            <main className="app">
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout