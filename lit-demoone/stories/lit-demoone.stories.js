import { html } from 'lit';
import '../src/lit-demoone.js';

export default {
  title: 'LitDemoone',
  component: 'lit-demoone',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <lit-demoone
      style="--lit-demoone-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </lit-demoone>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
