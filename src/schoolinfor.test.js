import React from "react";
import { render, screen } from "@testing-library/react";

import SchoolInfo from "./SchoolInfo";

const schools = {
  dbn: "10X439",
  schoolName: "Clinton School Writers & Artists, M.S. 260",
  overviewParagraph:
    "Students who are prepared for college must have an education that encourages them to take risks as they produce and perform. Our college preparatory curriculum develops writers and has built a tight-knit community. Our school develops students who can think analytically and write creatively. Our arts programming builds on our 25 years of experience in visual, performing arts and music on a middle school level. We partner with New Audience and the Whitney Museum as cultural partners. We are a International Baccalaureate (IB) candidate school that offers opportunities to take college courses at neighboring universities.",
};

test("render school info", () => {
  render(<SchoolInfo school={schools} />);

  expect(screen.getByText("10X439")).toBeInTheDocument;
  expect(screen.getByText("Clinton School Writers & Artists, M.S. 260"))
    .toBeInTheDocument;
  expect(
    screen.getByText(
      "Students who are prepared for college must have an education that encourages them to take risks as they produce and perform. Our college preparatory curriculum develops writers and has built a tight-knit community. Our school develops students who can think analytically and write creatively. Our arts programming builds on our 25 years of experience in visual, performing arts and music on a middle school level. We partner with New Audience and the Whitney Museum as cultural partners. We are a International Baccalaureate (IB) candidate school that offers opportunities to take college courses at neighboring universities."
    )
  ).toBeInTheDocument;
});
