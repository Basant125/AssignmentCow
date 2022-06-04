import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from "@mui/material/Button"
import { HiMenuAlt1 } from 'react-icons/hi'
import { GoX } from 'react-icons/go'
import '../../sass/Navbar.scss'

const Navbar = ({ setActive, active }) => {

    const handleMenu = (bool) => {
        setActive(bool)
    }
    return <div className="navbar">
        <div className="navbar_container">
            <div className="logo_box">
                <div className="menu">
                    {!active ? (<HiMenuAlt1 className="menu-bar" onClick={() => handleMenu(true)} />) : (< GoX className="menu-bar" onClick={() => handleMenu(false)} />)}
                </div>
                <div className="select-bx">
                    <span className="desc-text"> Saying Hi to my customers</span>
                    <span className="mobile-text"> Saying Hi</span>
                    <KeyboardArrowDownIcon className="arrow_down" />
                </div>

            </div>
            <div className="nav-btns">
                <Button variant="contained" className="cancel-btn">Cancel</Button>
                <Button variant="contained" className="save-btn">Save</Button>
            </div>
        </div>
    </div>;
};

export default Navbar;
