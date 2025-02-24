import React from 'react';
import { GitHub, Description } from '@mui/icons-material';
import { Meta, StoryObj } from '@storybook/react';
import { ArgoCD } from '../../src/icons';

export default {
    title: 'icons/ArgoCD',
    component: ArgoCD,
    argTypes: {
        links: { control: 'object' }
    }
} as Meta;



export const Default: StoryObj<typeof ArgoCD> = {
    render: (args) => (
        <div style={{ width: '10rem'}}>
          <ArgoCD/>
        </div>
      )
};


export const Small: StoryObj<typeof ArgoCD> = {
    render: (args) => (
        <div style={{ width: '2rem'}}>
          <ArgoCD/>
        </div>
      )
};


export const Big: StoryObj<typeof ArgoCD> = {
    render: (args) => (
        <div style={{ width: '30rem'}}>
          <ArgoCD/>
        </div>
      )
};