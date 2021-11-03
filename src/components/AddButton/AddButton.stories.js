import { StyledAddButton as Button} from "./AddButton.styles";

export default {
   title: 'Components/AddButton',
   component: Button,
}

const Template = (args) => <Button {...args}>Read more</Button>

export const Default = Template.bind({})