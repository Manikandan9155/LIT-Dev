import { html, TemplateResult } from 'lit';
import '../src/lit-typescript.js';

export default {
  title: 'LitTypescript',
  component: 'lit-typescript',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ header, backgroundColor = 'white' }: ArgTypes) => html`
  <lit-typescript style="--lit-typescript-background-color: ${backgroundColor}" .header=${header}></lit-typescript>
`;

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
