import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ArgoIcon } from '../../src/icons';

export default {
    title: 'icons/Argo',
    component: ArgoIcon,
    argTypes: {
        links: { control: 'object' }
    }
} as Meta;



export const Default: StoryObj<typeof ArgoIcon> = {
    render: (args) => (
        <div style={{ width: '10rem'}}>
          <ArgoIcon/>
        </div>
      )
};


export const Small: StoryObj<typeof ArgoIcon> = {
    render: (args) => (
        <div style={{ width: '2rem'}}>
          <ArgoIcon/>
        </div>
      )
};


export const Big: StoryObj<typeof ArgoIcon> = {
    render: (args) => (
        <div style={{ width: '30rem'}}>
          <ArgoIcon/>
        </div>
      )
};