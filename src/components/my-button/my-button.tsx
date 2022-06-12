import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.scss',
  shadow: true,
})
export class MyButton {
  @Prop() color: 'primary' | 'secondary' | 'danger' | 'warn';
  render() {
    return (
      <button
        class={{
          'my-btn': true,
          [`my-btn-${this.color}`]: !!this.color,
        }}
      >
        <slot />
      </button>
    );
  }
}
