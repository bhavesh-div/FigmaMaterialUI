import Login from "./Login";
import { BrowserRouter as Router } from "react-router-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { Formik } from "formik";

describe("Test The Login Component", () => {
  test("render the login with  Button", () => {
    render(
      <Router>
        <Login />
      </Router>
    );
  });
});

it("should have validation error given input field is touched and error exists on form", async () => {
  const onSubmit = jest.fn();
  const { getByText } = render(
    <Formik initialValues={{ email: "", password: "" }} onSubmit={onSubmit}>
      {() => (
        <form>
          <Router>
            <Login />
          </Router>
        </form>
      )}
    </Formik>
  );

  fireEvent.click(screen.getByText("Login"));
  expect(screen.getByTestId("emailError")).toBeInTheDocument();
  expect(screen.getByTestId("ErrorPassword")).toBeInTheDocument();
  expect(onSubmit).not.toHaveBeenCalled();
});

it("should submit the form when valid email and password are provided", async () => {
  const onSubmit = jest.fn();
  const { getByTestId, getByText } = render(
    <Formik initialValues={{ email: "", password: "" }} onSubmit={onSubmit}>
      {() => (
        <form>
          <Router>
            <Login />
          </Router>
        </form>
      )}
    </Formik>
  );
  fireEvent.change(screen.getByTestId(/Email/i), {
    target: { value: "test@example.com" },
  });
  fireEvent.change(screen.getByTestId(/Password/i), {
    target: { value: "password@123" },
  });
  fireEvent.click(screen.getByText(/Login/i));

  expect(onSubmit).toHaveBeenCalledWith({
    email: "test@example.com",
    password: "password@123",
  });
});

// it("Email Validation Show", async () => {
//   const { getByTestid } = render(
//     <Router>
//       <Login />
//     </Router>
//   );
//   const input = getByTestid("Email");
//   fireEvent.blur(input);

//   await wait(() => {
//     expect(getByTestid("emailError")).not.toBe(null);
//     expect(getByTestid("emailError")).toHaveTextContent("Required");
//   });
// });

// it("Password Validation", async () => {
//   const { getByTestid } = render(
//     <Router>
//       <Login />
//     </Router>
//   );
//   const input = getByTestid("Password");
//   fireEvent.blur(input);

//   await wait(() => {
//     expect(getByTestid("ErrorPassword")).not.toBe(null);
//     expect(getByTestid("ErrorPassword")).toHaveTextContent("Required");
//   });
// });

// test("rendering and submitting a basic Formik form", async () => {
//   const handleSubmit = jest.fn();
//   render(
//     <Router>
//       <Login onSubmit={handleSubmit} />
//     </Router>
//   );
// });
