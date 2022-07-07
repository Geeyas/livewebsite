import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';
import Menu from './menuApi';

const NavBar = () => {

  const [menuData, setMenuData] = useState(Menu);

  const filterItem = (category) => {
    const updateMenuList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updateMenuList);
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" >
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto black-90" style={{ fontSize: "30px" }}>
            <li className="nav-item active">
              <button className="nav-link ml4 btn-light" onClick={() => filterItem("breakfast")}>Breakfast </button>
            </li>
            <li className="nav-item">
              <button className="nav-link ml4 btn-light" onClick={() => filterItem("evening")}>Evening</button>
            </li>
            <li className="nav-item">
              <button className="nav-link ml4 btn-light" onClick={() => filterItem("lunch")}>Lunch</button>
            </li>
            <li className="nav-item">
              <button className="nav-link ml4 btn-light" onClick={() => filterItem("dinner")}>Dinner</button>
            </li>
            <li className="nav-item">
              <button className="nav-link ml4 btn-light" onClick={()=> setMenuData(Menu)}>All</button>
            </li>

          </ul>
        </div>
      </nav>
    </>
  )
}


export default NavBar