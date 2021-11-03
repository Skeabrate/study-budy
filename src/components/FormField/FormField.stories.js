import FormField from "./FormField"

export default {
   title: 'Components/FormField',
   component: FormField,
}

const Template = (args) => <FormField name="story" id="story" {...args}>Read more</FormField>

export const Default = Template.bind({})
Default.args = {
   label: 'Login',
}