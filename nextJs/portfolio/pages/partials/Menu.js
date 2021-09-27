import { slide as Menu } from 'react-burger-menu'

const Hamburger = (props) => {
    return (
        <Menu right>
            <ul className="links">
                <li className="btn hover"><a href="https://docs.google.com/document/d/e/2PACX-1vQjcQ_SEg9cyJ9lR6Ehq9OFpWO3Sex6L8ErYijPnuJxqj_KYHcUcqdUkuLfV6vNu-Jw0Rirq4XwuTHR/pub" target="_blank">Resume</a></li>
                <li className="btn hover"><a href="#about">About</a></li>
                <li className="btn hover"><a href="#projects">Projects</a></li>
                <li className="btn hover"><a href="#recommendations">Recommendations</a></li>
                <li className="btn hover"><a href="#connect">Connect</a></li>
                <li className="btn hover"><a href="https://www.linkedin.com/in/wkoslik/" target="_blank" >LinkedIn</a></li>
                <li className="btn hover"><a href="https://github.com/wkoslik" target="_blank">GitHub</a></li>
            </ul>
        </Menu>
    )
}

export default Hamburger