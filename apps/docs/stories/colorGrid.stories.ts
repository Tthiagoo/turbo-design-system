import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@mydesign/ui'

import React from 'react'
import { ColorsGrid } from '../pages/tokens/ColorsGrid';

const meta: Meta<typeof Button> = {
  title: 'Doc/Grid Colors',
  component: ColorsGrid,
  
} 
export default meta;


type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  
};

  

