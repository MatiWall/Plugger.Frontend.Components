import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, expect } from "@storybook/test";
import { Header, defaultTheme } from "../../src";
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';


// Define metadata for the story
const meta = {
  title: "Components/header/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    icon: { control: false }, // Disable icon control as it's passed as a React component
    content: { control: false }, // Disable content control
  },
  decorators: [
    (Story) =>(
      <ThemeProvider theme={defaultTheme}>
      <CssBaseline /> {/* Ensures consistent styling */}
      <Story />
    </ThemeProvider>
    )
  ]
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// Define the default story
export const Default: Story = {
  args: {
    icon: undefined,
    content: undefined,
  },
};