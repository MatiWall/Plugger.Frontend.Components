import React from 'react';
import { GitHub, Description } from '@mui/icons-material';
import { Meta, StoryObj } from '@storybook/react';
import { LinkBar } from '../../src';

export default {
    title: 'components/LinkBar',
    component: LinkBar,
    argTypes: {
        links: { control: 'object' }
    }
} as Meta;

const defaultLinks = [
    { icon: <GitHub />, url: 'https://github.com', title: 'GitHub' },
    { icon: <Description />, url: 'https://example.com', title: 'Docs' }
];

export const Default: StoryObj<typeof LinkBar> = {
    args: {
        links: defaultLinks
    }
};

export const CustomLinks = () => {
    const links = [
        { icon: <GitHub />, url: 'https://github.com', title: 'GitHub' },
        { icon: <Description />, url: 'https://example.com/docs', title: 'Documentation' },
        { icon: <GitHub />, url: 'https://github.com', title: 'GitHub' },
        { icon: <Description />, url: 'https://example.com/docs', title: 'Documentation' },
        { icon: <GitHub />, url: 'https://github.com', title: 'GitHub' },
        { icon: <Description />, url: 'https://example.com/docs', title: 'Documentation' },
        { icon: <GitHub />, url: 'https://github.com', title: 'GitHub' },
        { icon: <Description />, url: 'https://example.com/docs', title: 'Documentation' },
        { icon: <GitHub />, url: 'https://github.com', title: 'GitHub' },
        { icon: <Description />, url: 'https://example.com/docs', title: 'Documentation' },
        { icon: <GitHub />, url: 'https://github.com', title: 'GitHub' },
        { icon: <Description />, url: 'https://example.com/docs', title: 'Documentation' },
        { icon: <GitHub />, url: 'https://github.com', title: 'GitHub' },
        { icon: <Description />, url: 'https://example.com/docs', title: 'Documentation' },
        { icon: <GitHub />, url: 'https://github.com', title: 'GitHub' },
        { icon: <Description />, url: 'https://example.com/docs', title: 'Documentation' },
        { icon: <GitHub />, url: 'https://github.com', title: 'GitHub' },
        { icon: <Description />, url: 'https://example.com/docs', title: 'Documentation' },
        { icon: <GitHub />, url: 'https://github.com', title: 'GitHub' },
        { icon: <Description />, url: 'https://example.com/docs', title: 'Documentation' },
                { icon: <GitHub />, url: 'https://github.com', title: 'GitHub' },
        { icon: <Description />, url: 'https://example.com/docs', title: 'Documentation' },
    ];

    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
            <LinkBar links={links} />
        </div>
    );
};
