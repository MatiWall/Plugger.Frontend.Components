import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Rancher } from '../../src/icons';

export default {
    title: 'icons/Rancher',
    component: Rancher,
    argTypes: {
        links: { control: 'object' }
    }
} as Meta;



export const Default: StoryObj<typeof Rancher> = {
    render: (args) => (
        <div style={{ width: '10rem'}}>
          <Rancher/>
        </div>
      )
};