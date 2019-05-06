import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen";

Enzyme.configure({adapter: new Adapter()});
it(`Welcome-screen click button is correctly`, () => {
  const clickHandler = jest.fn();
  const app = shallow(
      <WelcomeScreen time={7} errorCount={77} btnStartClickHandler={clickHandler} />
  );
  const startButton = app.find(`button`);
  startButton.simulate(`click`, {preventDefault() {}});
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
