import { render, screen, fireEvent, act } from "../../test-utils";
import SearchInput from "./SearchInput";
import { setupServer } from "msw/node"
import { handlers } from "../../mocks/handlers"
import '@testing-library/jest-dom';
import { waitFor } from "@testing-library/react";

const server = setupServer(...handlers)

describe('Search input', () => {
   beforeAll(() => server.listen())
   afterEach(() => server.resetHandlers())
   afterAll(() => server.close())

   it('renders the component', () => {
      render(<SearchInput />)
      screen.getByText('Teacher')
      screen.getByPlaceholderText('find student')
   })

   it('display users when search phrase is matching', async () => {
      render(<SearchInput />)
      const input = screen.getByPlaceholderText('find student')
      
      /* fireEvent.change(input, {target: {value: ''}})
      await waitFor(() => {
         expect(screen.getByTestId('listitem')).not.toBeVisible()
      }) */
      
   })
})


