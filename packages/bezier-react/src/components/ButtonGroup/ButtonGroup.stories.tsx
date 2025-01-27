import React from 'react'

import type {
  Meta,
  StoryFn,
  StoryObj,
} from '@storybook/react'

import {
  Button,
  ButtonStyleVariant,
} from '~/src/components/Button'
import { Center } from '~/src/components/Center'
import {
  LegacySpacer,
  LegacyStackItem,
} from '~/src/components/LegacyStack'

import { ButtonGroup } from './ButtonGroup'
import mdx from './ButtonGroup.mdx'
import type { ButtonGroupProps } from './ButtonGroup.types'

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  parameters: {
    docs: {
      page: mdx,
    },
  },
}
export default meta

const Template: StoryFn<ButtonGroupProps> = (props) => (
  <Center
    width={200}
    height={200}
  >
    <LegacySpacer />
    <LegacyStackItem>
      <ButtonGroup {...props}>
        <Button text="취소" styleVariant={ButtonStyleVariant.Secondary} />
        <Button text="확인" styleVariant={ButtonStyleVariant.Primary} />
      </ButtonGroup>
    </LegacyStackItem>
    <LegacySpacer />
  </Center>
)

export const Playground: StoryObj<ButtonGroupProps> = {
  render: Template,

  args: {
    withoutSpacing: false,
  },
}
