import React from "react";
import { create } from "react-test-renderer";
import Details from "../Details";

test("snapshat", () => {
  const c = create(<Details />);
  expect(c.toJSON()).toMatchSnapshot();
});

test("show modal when toggleModal is called", () => {
  const c = create(<Details search={() => {}} />);
  const instance = c.getInstance();

  expect(instance.state.showModal).toBe(false);
  instance.toggleModal();
  expect(instance.state.showModal).toBe(true);
});
