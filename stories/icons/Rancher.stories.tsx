import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { RancherIcon } from '../../src/icons';

export default {
    title: 'icons/Rancher',
    component: RancherIcon,
    argTypes: {
        links: { control: 'object' }
    }
} as Meta;



export const Default: StoryObj<typeof RancherIcon> = {
    render: (args) => (
        <div style={{ width: '10rem'}}>
          <RancherIcon/>
        </div>
      )
};