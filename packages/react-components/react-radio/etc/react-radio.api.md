## API Report File for "@fluentui/react-radio"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import type { ComponentProps } from '@fluentui/react-utilities';
import type { ComponentState } from '@fluentui/react-utilities';
import type { Context } from '@fluentui/react-context-selector';
import type { ForwardRefComponent } from '@fluentui/react-utilities';
import { Label } from '@fluentui/react-label';
import * as React_2 from 'react';
import type { Slot } from '@fluentui/react-utilities';
import type { SlotClassNames } from '@fluentui/react-utilities';

// @public
export const Radio: ForwardRefComponent<RadioProps>;

// @public @deprecated (undocumented)
export const radioClassName = "fui-Radio";

// @public (undocumented)
export const radioClassNames: SlotClassNames<RadioSlots>;

// @public
export const RadioGroup: ForwardRefComponent<RadioGroupProps>;

// @public @deprecated (undocumented)
export const radioGroupClassName = "fui-RadioGroup";

// @public (undocumented)
export const radioGroupClassNames: SlotClassNames<RadioGroupSlots>;

// @public
export const RadioGroupContext: Context<RadioGroupContextValue>;

// @public (undocumented)
export type RadioGroupContextValue = Pick<RadioGroupProps, 'name' | 'value' | 'defaultValue' | 'disabled' | 'layout' | 'required'>;

// @public (undocumented)
export type RadioGroupContextValues = {
    radioGroup: RadioGroupContextValue;
};

// @public
export type RadioGroupOnChangeData = {
    value: string;
};

// @public (undocumented)
export type RadioGroupProps = Omit<ComponentProps<Partial<RadioGroupSlots>>, 'onChange'> & {
    name?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (ev: React_2.FormEvent<HTMLDivElement>, data: RadioGroupOnChangeData) => void;
    layout?: 'vertical' | 'horizontal' | 'horizontalStacked';
    disabled?: boolean;
    required?: boolean;
};

// @public (undocumented)
export type RadioGroupSlots = {
    root: NonNullable<Slot<'div'>>;
};

// @public
export type RadioGroupState = ComponentState<RadioGroupSlots> & Required<Pick<RadioGroupProps, 'layout'>> & Partial<Exclude<RadioGroupProps, 'onChange' | 'layout'>>;

// @public
export type RadioOnChangeData = {
    value: string;
};

// @public
export type RadioProps = Omit<ComponentProps<Partial<RadioSlots>, 'input'>, 'onChange' | 'size'> & {
    value?: string;
    labelPosition?: 'after' | 'below';
    disabled?: boolean;
    onChange?: (ev: React_2.ChangeEvent<HTMLInputElement>, data: RadioOnChangeData) => void;
};

// @public (undocumented)
export type RadioSlots = {
    root: NonNullable<Slot<'span'>>;
    label: Slot<typeof Label>;
    input: NonNullable<Slot<'input'>>;
    indicator: NonNullable<Slot<'div'>>;
};

// @public
export type RadioState = ComponentState<RadioSlots> & Required<Pick<RadioProps, 'labelPosition'>>;

// @public
export const renderRadio_unstable: (state: RadioState) => JSX.Element;

// @public
export const renderRadioGroup_unstable: (state: RadioGroupState, contextValues: RadioGroupContextValues) => JSX.Element;

// @public
export const useRadio_unstable: (props: RadioProps, ref: React_2.Ref<HTMLInputElement>) => RadioState;

// @public
export const useRadioGroup_unstable: (props: RadioGroupProps, ref: React_2.Ref<HTMLDivElement>) => RadioGroupState;

// @public (undocumented)
export const useRadioGroupContextValues: (state: RadioGroupState) => RadioGroupContextValues;

// @public
export const useRadioGroupStyles_unstable: (state: RadioGroupState) => void;

// @public
export const useRadioStyles_unstable: (state: RadioState) => void;

// (No @packageDocumentation comment for this package)

```