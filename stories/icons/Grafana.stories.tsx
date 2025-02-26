import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { GrafanaIcon } from '../../src/icons';

export default {
    title: 'icons/Grafana',
    component: GrafanaIcon,
    argTypes: {
        links: { control: 'object' }
    }
} as Meta;



export const Default: StoryObj<typeof GrafanaIcon> = {
    render: (args) => (
        <div style={{ width: '10rem'}}>
          <GrafanaIcon/>
        </div>
      )
};