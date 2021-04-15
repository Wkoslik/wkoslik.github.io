import Hamburger from './Menu'
import Head from 'next/head'

export default function Nav() {
    return (
        <nav className="sticky">
            <Head>
                <title>Whitney Koslik</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href='/initials_header_black_0ij_icon.ico'></link>
                <link href="https://fonts.googleapis.com/css2?family=Amatic+SC&family=Fredericka+the+Great&display=swap" rel="stylesheet"/>
                <script src="https://www.google.com/recaptcha/api.js?&render=explicit" async defer></script>
            </Head>
            <header>
                <div className="header-image">
                    <img src='/initialsheader.png' alt="Whitney Kosliks initials- wk" id="initials" />
                </div>
                <div className="header-name">
                    <h1>Whitney Koslik</h1>
                </div>
                <div className="header-ham"></div>
            </header>
        </nav>
    )
}