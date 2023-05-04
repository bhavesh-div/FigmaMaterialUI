import Signup from "./Signup";
import { BrowserRouter as Router } from "react-router-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { Formik } from "formik";

describe("Test The Signup Component", () => {
  test("render the signup with  Button", () => {
    render(
      <Router>
        <Signup />
      </Router>
    );
  });
});

// it("should have validation error given input field is touched and error exists on form", async () => {
//     const onSubmit = jest.fn();
//     const { getByText } = render(
//       <Formik initialValues={{ fname:"", lname:"", mobile:"", email: "", password: "" }} onSubmit={onSubmit}>
//         {() => (
//           <form>
//             <Router>
//               <Signup />
//             </Router>
//           </form>
//         )}
//       </Formik>
//     );

//     fireEvent.click(screen.getByText("SignUp"));
//     expect(screen.getByTestId("ErrorFname")).toBeInTheDocument();
//     expect(screen.getByTestId("ErrorLname")).toBeInTheDocument();
//     expect(screen.getByTestId("ErrorMobile")).toBeInTheDocument();
//     expect(screen.getByTestId("emailError")).toBeInTheDocument();
//     expect(screen.getByTestId("ErrorPassword")).toBeInTheDocument();
//     expect(onSubmit).not.toHaveBeenCalled();
//   });

//   it("should submit the form when valid email and password are provided", async () => {
//     const onSubmit = jest.fn();
//     const { getByTestId, getByText } = render(
//       <Formik initialValues={{ fname:"", lname:"", mobile:"", email: "", password: "" }} onSubmit={onSubmit}>
//         {() => (
//           <form>
//             <Router>
//               <Signup />
//             </Router>
//           </form>
//         )}
//       </Formik>
//     );

//     fireEvent.change(screen.getByTestId(/First Name/i), {
//       target: { value: "Bhavesh" },
//     });

//     fireEvent.change(screen.getByTestId(/Last Name/i), {
//       target: { value: "Khapre" },
//     });

//     fireEvent.change(screen.getByTestId(/Mobile Number/i), {
//       target: { value: "7485120369" },
//     });
//     fireEvent.change(screen.getByTestId(/Email/i), {
//       target: { value: "test@example.com" },
//     });
//     fireEvent.change(screen.getByTestId(/Password/i), {
//       target: { value: "password@123" },
//     });
//     fireEvent.click(screen.getByText(/Signup/i));

//     expect(onSubmit).toHaveBeenCalledWith({
//      fanme:"Bhavesh",
//       lname:"Khapre",
//      mobile:"7485120369",
//       email: "test@example.com",
//       password: "password@123",
//     });
//   });

//
//
//
