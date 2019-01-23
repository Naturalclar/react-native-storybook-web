import { configure } from "@storybook/react";

function loadStories() {
  require("../src/pages/HomePage.story");
}

configure(loadStories, module);
