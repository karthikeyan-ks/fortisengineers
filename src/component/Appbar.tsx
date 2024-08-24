import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faContactBook as contact } from '@fortawesome/free-solid-svg-icons';
import { faAudioDescription as about } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import './Appbar.css';

export const AppBar = () => {
    const [selected, setSelected] = useState('home');

    const handleClick = (eve: React.MouseEvent): void => {
        console.log(eve.currentTarget.id);
        eve.currentTarget.classList.add('active');
        document.getElementById(selected)?.classList.remove('active');
        setSelected(eve.currentTarget.id);
    }

    return (
        <nav id="navbar">
            <span>
                <img src="https://fortisengineers.in/wp-content/uploads/2024/02/fortis.png" alt="Logo" height={60} width={80} />
            </span>
            <ul>
                <li className="list-group-item list-group-item-action" onClick={handleClick} id='home'>
                    <FontAwesomeIcon icon={faHome} />
                    <a href="#home">Home</a>
                </li>
                <li onClick={handleClick} id='about'>
                    <FontAwesomeIcon icon={about} />
                    <a href="#about">About</a>
                </li>
                <li onClick={handleClick} id='product'>
                    <FontAwesomeIcon icon={about} />
                    <a href="#product">Products</a>
                </li>
                <li onClick={handleClick} id='contact'>
                    <FontAwesomeIcon icon={contact} />
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
}
