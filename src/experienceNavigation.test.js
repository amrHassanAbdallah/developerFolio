import React from "react";
import ReactDOM from "react-dom";
import {act} from "react-dom/test-utils";
import {MemoryRouter} from "react-router-dom";
import Main from "./containers/Main";

let root;
beforeEach(() => {
  window.matchMedia = jest.fn().mockReturnValue({matches: false});
  window.scrollTo = jest.fn();
  Element.prototype.scrollIntoView = jest.fn();
  localStorage.clear();
  root = document.createElement("div");
  document.body.appendChild(root);
});
afterEach(() => {
  act(() => {
    ReactDOM.unmountComponentAtNode(root);
  });
  root.remove();
});
function render(path) {
  act(() => {
    ReactDOM.render(
      <MemoryRouter initialEntries={[path]}>
        <Main />
      </MemoryRouter>,
      root
    );
  });
}

test("a direct case-study link opens the disclosure and focuses its summary", () => {
  render("/experience?case=weride");
  const study = root.querySelector("#case-study-weride");
  expect(study.open).toBe(true);
  expect(document.activeElement).toBe(study.querySelector("summary"));
  expect(study.scrollIntoView).toHaveBeenCalled();
});

test("evidence links navigate to a company and can reopen the same case study", () => {
  render("/experience?case=weride");
  const study = root.querySelector("#case-study-weride");
  study.open = false;
  act(() => root.querySelector(".greeting-featured-work").click());
  expect(study.open).toBe(true);
  act(() =>
    root.querySelector('a[href="/experience?company=magalix"]').click()
  );
  expect(document.activeElement.id).toBe("experience-magalix");
});

test("unknown evidence parameters fall back to the experience section", () => {
  render("/experience?case=unknown&company=unknown");
  expect(root.querySelector("#case-study-weride").open).toBe(false);
  expect(document.activeElement).not.toBe(
    root.querySelector("#experience-magalix")
  );
  expect(root.querySelector("#experience").scrollIntoView).toHaveBeenCalled();
});
