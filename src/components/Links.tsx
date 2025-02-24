import React from 'react';
import Paper from '@mui/material/Paper';

type Link = {
    url: string;
    icon: React.ReactElement;
    title?: string;
};

const LinkBar = ({ links }: { links: Link[] }) => {
    return (
        <Paper style={{ 
            padding: '10px', 
            display: 'flex', 
            gap: '10px',
            overflowX: 'auto',
            width: '100%'
            }}>
            {links.map((link, index) => (
                <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textDecoration: 'none',
                        gap: '5px',
                        color: 'inherit',
                    }}
                >   
                    {link.icon}
                    {link.title && <span>{link.title}</span>}
                </a>
            ))}
        </Paper>
    );
};

export default LinkBar;
