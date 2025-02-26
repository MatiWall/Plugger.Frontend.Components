import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { GitHubIcon } from '../../src/icons';

export default {
    title: 'icons/GitHub',
    component: GitHubIcon,
    argTypes: {
        links: { control: 'object' }
    }
} as Meta;



export const Default: StoryObj<typeof GitHubIcon> = {
    render: (args) => (
        <div style={{ width: '10rem'}}>
          <GitHubIcon/>
        </div>
      )
};