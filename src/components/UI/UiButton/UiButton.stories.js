import UiButton from "./UiButton";

export default {
    title: 'Ui-Kit/UiButton',
    component: UiButton,
}
const props = {
    text: 'Button',
    onClick: () => console.log('Button click'),
    disabled: false,
    theme: 'light',
    classes: '',
}
// We create a “template” of how args map to rendering
const Template = (args) => <UiButton {...args} />;

// Each story then reuses that template
export const Light = Template.bind({});
Light.args = {
    ...props,
    theme: 'light',
};
export const Dark = Template.bind({});
Dark.args = {
    ...props,
    theme: 'dark',
};
export const Disabled = Template.bind({});
Disabled.args = {
    ...props,
    disabled: true,
};