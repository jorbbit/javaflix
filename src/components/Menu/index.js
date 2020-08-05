import React from 'react'
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
import Button from '../Button'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo da Aluraflix" />
            </a>
            
            <Button className="ButtonLink" href="/">
                Novo Video
            </Button>
        </nav>
    )
}

export default Menu