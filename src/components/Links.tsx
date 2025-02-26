import React from 'react';
import Paper from '@mui/material/Paper';
import { SxProps, Theme } from '@mui/system';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

type LinkProps = {
    url: string;
    icon: React.ReactElement;
    title?: string;
    sx?: SxProps<Theme>
};

const LinkItem: React.FC<LinkProps> = ({ url, icon, title, sx}) => {
    return (
        <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
                color: 'inherit',
                textAlign: 'center',
                ...sx
            }}
        >
            {icon}
            {title && <Typography variant="caption">{title}</Typography>}
        </Link>
    );
};

const LinkBar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Paper
            sx={{
                p: 1,
                display: 'flex',
                gap: 2,
                overflowX: 'auto',
                width: '100%',
                alignItems: 'center',
                bgcolor: 'background.paper',
            }}
            elevation={2}
        >
            {children}
        </Paper>
    );
};

export { LinkBar, LinkItem };
