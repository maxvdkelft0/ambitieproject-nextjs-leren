'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { FaTasks } from "react-icons/fa";
import classNames from 'classnames';

const NavBar = () => {
    const currentPath = usePathname();

    const links = [
        {label: 'Dashboard', href: '/'},
        {label: 'Tasks', href: '/tasks'},
    ]

    return (
        <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
            <Link href="/"><FaTasks className="hover:text-indigo-400 transition-colors" /></Link>
            <ul className='flex space-x-6'>
                {links.map(link =>
                    <Link 
                        key={link.href} 
                        className={classNames({
                            'text-zinc-900': link.href === currentPath,
                            'text-zinc-500': link.href !== currentPath,
                            'hover:text-zinc-800 transition-colors': true
                        })}
                        href={link.href}>
                        {link.label}
                    </Link>
                )}
            </ul>
        </nav>
    )
}

export default NavBar

// https://www.youtube.com/watch?v=J9sfR6HN6BY minuut 27:50