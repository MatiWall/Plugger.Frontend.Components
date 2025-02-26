import React from 'react';
import { GitHub, Description } from '@mui/icons-material';
import { Meta, StoryObj } from '@storybook/react';
import { LinkBar, LinkItem } from '../../src';

export default {
    title: 'components/LinkBar',
    component: LinkBar,
    argTypes: {
        links: { control: 'object' },
    },
} as Meta<typeof LinkBar>;

const defaultLinks = [
    { icon: <GitHub />, url: 'https://github.com', title: 'GitHub' },
    { icon: <Description />, url: 'https://example.com', title: 'Docs' },
    { icon: <div style={{width: '10rem'}}>Test</div>, url: 'https://example.com', title: 'Docs' },
];

export const Default: StoryObj<typeof LinkBar> = {
    args: {
        children: defaultLinks.map((link) => (
            <LinkItem key={link.url} {...link} />
        )),
    },
};

export const CustomLinks: StoryObj<typeof LinkBar> = {
    args: {
        children: Array.from({ length: 12 }, (_, index) => (
            <LinkItem 
                key={index} 
                icon={index % 2 === 0 ? <GitHub /> : <Description />} 
                url={index % 2 === 0 ? 'https://github.com' : 'https://example.com/docs'} 
                title={index % 2 === 0 ? 'GitHub' : 'Documentation'} 
            />
        )),
    },
    render: (args) => (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
            <LinkBar {...args} />
        </div>
    ),
};
