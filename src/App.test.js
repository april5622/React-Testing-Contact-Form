import React from "react";
import { render, fireEvent, getByText, wait } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";
import { act } from 'react-dom/test-utils';


test("renders App without crashing", () => {
  render(<App />);
});

test("placeholders are present", () => {
  const { getByPlaceholderText } = render(<ContactForm />);

  //getByPlaceholderText(/bill/i);
  getByPlaceholderText(/luo/i);
  getByPlaceholderText(/bluebill1049@hotmail.com/i);
  
});

describe("input fields in form", () => {
  test('it renders a name and placeholder of inputs', () => {
    const firstNameInput = {
      name:"firstName",
      placeholder: "bill"
    }
    const lastNameInput = {
      name: "lastName",
      placeholder:"luo"
    }
    const props = {
      inputs: [firstNameInput, lastNameInput]
    }
    render(<ContactForm {...props}/>)
  });
});

// it("submit", () => {
//   const onSubmit = jest.fn();
//   const {getByTestId} = render(<ContactForm onSubmit={onSubmit}/>);
//   act(() => {
//     fireEvent.submit(getByTestId("form"));
//   });  
//   expect(jest.fn()).toHaveBeenCalled();
// });


it("submits correct values", async () => {
  const {container} = render(<ContactForm/>)
  const firstname = container.querySelector('input[name= "firstName"]')
  const lastname = container.querySelector('input[name="lastName"]')
  const email = container.querySelector('input[name="email"]')
  const submit = container.querySelector('input[type="submit"]');

  // await wait(() => {
  //   fireEvent.change(firstname, {
  //     target: {
  //       value: "april"
  //     }
  //   })
  // })

  // await wait(() => {
  //   fireEvent.change(lastname, {
  //     target:{
  //       value: "ma"
  //     }
  //   })
  // })

  // await wait(() => {
  //   fireEvent.change(email, {
  //     target: {
  //       value: "april@april.com"
  //     }
  //   })
  // })
  
  // await wait(() => {
  //   fireEvent.click(submit)
  // })

  // expect(result.innerHTML).toBe(
  //   '{"firstname": "april", "lastname": "ma", "email": "april@april.com"}'
  // )
})
