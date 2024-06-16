"use client";
import React, { useState, useEffect } from 'react';
import '../../styles/directory.css';


interface Directory {
    name: string;
    children?: Directory[];
    link?: string;
}

interface DirectoryProps {
    directory: Directory;
}

const Directory: React.FC<DirectoryProps> = ({ directory }) => {
    const isBigScreen = window.innerWidth > 768; // Adjust this value as needed
    const [isOpen, setIsOpen] = useState(isBigScreen);

    useEffect(() => {
        const handleResize = () => {
            setIsOpen(window.innerWidth > 1024);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

    const toggleOpen = (event: React.MouseEvent) => {
        if (directory.children) {
            event.preventDefault();
        }
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <a href={directory.link || "#"} onClick={toggleOpen}>
                {isOpen ? '└──' : '├──'} {directory.name}
            </a>
            {isOpen && directory.children && (
                <div className="nested">
                    {directory.children.map((child, index) => (
                        <Directory key={index} directory={child} />
                    ))}
                </div>
            )}
        </div>
    );
};

const DirectoryTree: React.FC = () => {
    const directoryStructure: Directory = {
        name: '.',
        children: [
            { name: 'Home', link: '/' },
            { name: 'About Me', link: '/about' },
            { name: 'Projects', children: [
                { name: 'AVNS', link: `/blog/${1}`},
                { name: 'mokt', link: `/blog/${2}` }]},
        ]
    };

    return (
        <div className="terminal">
            <pre>
                <Directory directory={directoryStructure} />
            </pre>
        </div>
    );
};

export default DirectoryTree;
