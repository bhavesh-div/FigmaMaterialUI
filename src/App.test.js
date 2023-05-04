import React from "react";
import { shallow, configure } from "enzyme";
import { Route } from "react-router-dom";
import { Dashboard, Signup, Login } from "./App";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

configure({ adapter: new Adapter() });

let pathMap = {};
describe("routes using array of routers", () => {
  beforeAll(() => {
    const component = shallow(<App />);
    pathMap = component.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.Component;
      return pathMap;
    }, {});
  });

  it("Should Show Signup component for Signup", () => {
    expect(pathMap["/"]).toBe(Signup);
  });

  it("Should Show Login Component Login", () => {
    expect(pathMap["/Login"]).toBe(Login);
  });

  it("should Show Dashboard Component for router", () => {
    expect(pathMap["/Dashboard"]).toBe(Dashboard);
  });
});
