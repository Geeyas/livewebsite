import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';

import Menu from './menuApi';
import Cards from './Cards';
import "./menucard.css";

const MenuCards = () => {
    const [menuData, setMenuData] = useState(Menu); //Hooks=> useState - always use to manage data... get data from APi and store it

    const filterItem = (category) => {
        const updateMenuList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updateMenuList);
    }
    return (
        <>
            <nav>
                <ul>
                    <li><button onClick={() => filterItem("breakfast")}>Break-Fast</button></li>
                    <li><button onClick={() => filterItem("evening")}>Evening</button></li>
                    <li><button onClick={() => filterItem("lunch")}>Lunch</button></li>
                    <li><button onClick={() => filterItem("dinner")}>Dinner</button></li>
                    <li><button onClick={() => setMenuData(Menu)}>All</button></li>
                </ul>
            </nav>
            <Cards menuData={menuData} />
        </>
    )
}

export default MenuCards