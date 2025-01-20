import React from 'react'
import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "../../src"



const meta = {
    title: 'Components/navbar/Navbar',
    component: Navbar,
    parameters: {
        layout: "fullscreen",
      },
} satisfies Meta<typeof Navbar>;

export default meta

type Story = StoryObj<typeof meta>

// Define the default story
export const Default: Story = {
    args: {
        title: <h1>Title</h1>
    },
    render: (args) =>(
        <div style={{width: '15rem'}}>
            <Navbar/>
        </div>
    )
  };