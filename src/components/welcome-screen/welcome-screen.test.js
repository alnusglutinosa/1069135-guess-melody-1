import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen";

it(`Welcome-screen correctly renders`, () => {
  const tree = renderer.create(<WelcomeScreen time={7} errorCount={77} />).toJSON();
  expect(tree).toMatchSnapshot();
});
