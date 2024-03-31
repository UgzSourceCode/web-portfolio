import type { Meta, StoryObj } from "@storybook/react";

import { AppLayout } from "./AppLayout.tsx";

const meta: Meta<typeof AppLayout> = {
	title: "Layout/AppLayout",
	component: AppLayout,
};

export default meta;

type Story = StoryObj<typeof AppLayout>;

export const Primary: Story = {
	args: {},
};
