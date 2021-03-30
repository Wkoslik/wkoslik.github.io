export default function Header() {
    return (
        <header>
            <img src='/initialsheader.png' alt="Whitney Kosliks initials- wk" id="initials" />
            <div className="header-details">
                <h1>Whitney Koslik</h1>
                <navbar>
                    <ul className="links">
                        <li><a href="https://docs.google.com/document/d/e/2PACX-1vTgSmJGZ7ZtIWcbvPKRuhcEd08XXzL1Ga2-YKjEPvLvFxK5WCkTmC4VlGIokjNNxayCiEwzT3SW2pvC/pub" target="_blank">Resume</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#recommendations">Recommendations</a></li>
                        <li><a href="#connect">Connect</a></li>
                    </ul>
                </navbar>
            </div>
        </header>
    )
}