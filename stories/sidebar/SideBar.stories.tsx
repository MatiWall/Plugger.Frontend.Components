import React from 'react'
import type { Meta, StoryObj } from "@storybook/react";
import { SideBar, SideBarNavItem, defaultTheme, SideBarTool } from "../../src"
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";



const meta = {
  title: 'Components/sidebar/SideBar',
  component: SideBar,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline /> {/* Ensures consistent styling */}
          <Story />
        </ThemeProvider>
      </BrowserRouter>
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
      () => <div>Tool 1</div>
    ]
  },
  render: (args) => (
    <div style={{ width: '15rem' }}>
      <SideBar title={args.title} tools={args.tools} />
    </div>
  )
};


export const WithoutTools: Story = {
  args: {
    title: () => <h1>Title</h1>,
  },
  render: (args) => (
    <div style={{ width: '15rem' }}>
      <SideBar title={args.title} tools={args.tools} />
    </div>
  )
};



export const WithRouteItems: Story = {
  args: {
    title: () => <h1>Title</h1>,
    links: [
      () => <SideBarNavItem
        path={'path'}
        text={'Path 1'}
        icon={<InboxIcon />}
      />,
      () => <SideBarNavItem
      path={'path2'}
      text={'Path 2'}
      icon={<MailIcon />}
    />
    ]
  },
  render: (args) => (
    <div style={{ width: '15rem' }}>
      <SideBar title={args.title} tools={args.tools} links={args.links} />
    </div>
  )
};





export const WithManyRouteItems: Story = {
  args: {
    title: () => <h1>Title</h1>,
    links: Array.from({ length: 10 }, (_, i) => () => (
      <SideBarNavItem
        key={`link-${i}`} // Ensure unique keys for each link
        path={`/path-${i + 1}`}
        text={`Path ${i + 1}`}
        icon={i % 2 === 0 ? <InboxIcon /> : <MailIcon />}
      />
    )),
    tools: [
      () => <SideBarTool content={()=><div>Tool 1</div>} />,
      () => <div>Tool 2</div>,
      () => <div>Tool 3</div>,
      () => <div>Tool 4</div>
    ]
  },
  render: (args) => (
    <div style={{ width: '15rem' }}>
      <SideBar title={args.title} tools={args.tools} links={args.links} />
    </div>
  )
};