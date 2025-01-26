import React from 'react'
import type { Meta, StoryObj } from "@storybook/react";
import { SideBar, defaultTheme } from "../../src"
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';



const meta = {
    title: 'Components/sidebar/SideBar',
    component: SideBar,
    parameters: {
        layout: "fullscreen",
      },
      decorators: [
        (Story) =>(
          <ThemeProvider theme={defaultTheme}>
          <CssBaseline /> {/* Ensures consistent styling */}
          <Story />
        </ThemeProvider>
        )
      ]
} satisfies Meta<typeof SideBar>;

export default meta

type Story = StoryObj<typeof meta>

// Define the default story
export const Default: Story = {
    args: {
        title: () => <h1>Title</h1>, 
        tools: [
          ()=> <div>Tool 1</div>
        ]
    },
    render: (args) =>(
        <div style={{width: '15rem'}}>
            <SideBar title={args.title} tools={args.tools}/>
        </div>
    )
  };


  export const WithouTools: Story = {
    args: {
        title: () => <h1>Title</h1>, 
    },
    render: (args) =>(
        <div style={{width: '15rem'}}>
            <SideBar title={args.title} tools={args.tools}/>
        </div>
    )
  };