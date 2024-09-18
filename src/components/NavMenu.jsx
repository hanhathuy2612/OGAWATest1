import React from 'react';
import './NavMenu.scss';
import PropTypes from "prop-types";

const navData = [
    "BỘ SƯU TẬP",
    "VỀ CHÚNG TÔI",
    "MUA SẮM",
    "TIN TỨC",
    "CỬA HÀNG",
    "TUYỂN DỤNG",
    "LIÊN HỆ"
]

const NavItem = ({children}) => (
    <div className="NavItem">{children}</div>
)

NavItem.propTypes = {
    children: PropTypes.node.isRequired,
};

export default function NavMenu() {
    return (
        <div className='NavMenu'>
            {navData.map(item => (
                <NavItem key={item.id}>
                    {item}
                </NavItem>
            ))}
        </div>
    );
}