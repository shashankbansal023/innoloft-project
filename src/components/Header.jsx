import React from 'react';
import Logo from '../icons/Logo';
import { Link } from 'react-router-dom';


const navigationLinks = [
    {
        title: 'Main',
        route: '/',
    },
    {
        title: 'Product',
        route: '/product',
    },
]

const Header = () => {
    return (
        <div className="flex items-center width-100 bg-blue-800 px-10 py-5 justify-between">
            <Logo />
            <div className="flex gap-10 text-neutral-100">
                {
                    navigationLinks.map(link => {
                        return (
                            <Link key={link.title} to={link.route}>{link.title}</Link>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Header;