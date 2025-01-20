import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, expect } from "@storybook/test";
import { Header } from "../../src";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

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

// Story with both icon and content
export const WithIconAndContent: Story = {
  args: {
    icon: MenuIcon,
    content: () => <div>User Info</div>,
  },
};

// Story with just the icon
export const WithIcon: Story = {
  args: {
    icon: AccountCircleIcon,
    content: undefined,
  },
};

// Story with just the content
export const WithContent: Story = {
  args: {
    icon: undefined,
    content: () => <div>Custom Content Here</div>,
  },
};

// Interaction test for the `WithIconAndContent` story
export const InteractionTest: Story = {
  args: {
    icon: MenuIcon,
    content: () => <div>Interactive Content</div>,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Verify the icon is rendered
    const iconButton = canvas.getByRole("button", { name: /menu/i });
    await expect(iconButton).toBeInTheDocument();

    // Simulate clicking the icon button
    await userEvent.click(iconButton);

    // Verify content is rendered
    const content = canvas.getByText("Interactive Content");
    await expect(content).toBeInTheDocument();
  },
};
