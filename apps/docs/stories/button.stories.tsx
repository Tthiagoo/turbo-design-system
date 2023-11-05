import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@mydesign/ui'

import React from 'react'
import { ArrowRight } from 'phosphor-react';

const meta: Meta<typeof Button> = {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: { action: 'clicked' },
  },
} 
export default meta;


type Story = StoryObj<typeof Button>;


export const Primary: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary',
    children: 'Create new',
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}



export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children:(
      <>
      Proximo Passo
      <ArrowRight/>
      </>
    )
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
