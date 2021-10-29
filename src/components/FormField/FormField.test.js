import React, { useState } from "react";
import '@testing-library/jest-dom';
import FormField from "./FormField"
import { renderWithProviders } from "../../helpers/renderWithProviders"

describe('input with button', () => {
   it('renders components', () => {
      renderWithProviders(<FormField label="name" name="name" id="name"/>)
   })
})