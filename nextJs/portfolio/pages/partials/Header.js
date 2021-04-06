import Head from 'next/head'

export default function Header() {
    return (
        <div>
            <Head>
                <title>Whitney Koslik</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href='/initials_header_black_0ij_icon.ico'></link>
                <script src="https://www.google.com/recaptcha/api.js?&render=explicit" async defer></script>
            </Head>
            <header>
                <img src='/initialsheader.png' alt="Whitney Kosliks initials- wk" id="initials" />
                <div className="header-details">
                    <h1>Whitney Koslik</h1>
                </div>
            </header>
        </div>
    )
}