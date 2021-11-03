import UsersListItem from "./UsersListItem"

export default {
   title: 'Components/UsersListItem',
   component: UsersListItem,
}

const Template = (args) => <UsersListItem {...args} />

export const BadGrades = Template.bind({})
BadGrades.args = {
   user: {
      name: 'Adam Romański',
      attendance: '25%',
      average: '2.3'
   }
}

export const MediumGrades = Template.bind({})
MediumGrades.args = {
   user: {
      name: 'Adam Romański',
      attendance: '25%',
      average: '3.3'
   }
}

export const GoodGrades = Template.bind({})
GoodGrades.args = {
   user: {
      name: 'Adam Romański',
      attendance: '25%',
      average: '4.3'
   }
}