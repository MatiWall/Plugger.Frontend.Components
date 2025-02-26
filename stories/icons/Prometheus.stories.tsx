import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { PrometheusIcon } from '../../src/icons';

export default {
    title: 'icons/Prometheus',
    component: PrometheusIcon,
    argTypes: {
        links: { control: 'object' }
    }
} as Meta;



export const Default: StoryObj<typeof PrometheusIcon> = {
    render: (args) => (
        <div style={{ width: '10rem'}}>
          <PrometheusIcon/>
        </div>
      )
};