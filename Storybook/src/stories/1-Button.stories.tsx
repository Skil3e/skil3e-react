import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from "../src/components/Buttons/Button";
// import { Meta, Story, Props, Preview } from '@storybook/addon-docs/blocks';
export default {
    title    : 'Button',
    component: Button,
};

export const Text = () => {
    return (
        <Button look={ "fill" } intent={ "primary" } onClick={ action( 'clicked' ) }>Hello Button</Button>
    )
}
