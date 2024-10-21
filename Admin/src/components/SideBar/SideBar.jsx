import React from 'react'
import "./SideBar.css"
import { NavLink } from 'react-router-dom'
import { assets } from '../../admin_assets/assets'

const SideBar = () => {
  return (
    <div>
        <div className="sidebar">
            <div className="side-bar-options">
                <NavLink to={'/Add'} className="side-bar-option">
                    <img src={assets.add_icon} alt="" />
                    <p>Add Items</p>
                </NavLink>
                <NavLink to={'/list'} className="side-bar-option">
                    <img src={assets.order_icon} alt="" />
                    <p>List Items</p>
                </NavLink>
                <NavLink to={"/orders"} className="side-bar-option">
                    <img src={assets.order_icon} alt="" />
                    <p>Order</p>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default SideBar