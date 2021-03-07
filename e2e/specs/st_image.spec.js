/**
 * @license
 * Copyright 2018-2021 Streamlit Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

describe("st.image", () => {
  before(() => {
    cy.visit("http://localhost:3000/");
  });

  it("displays an image", () => {
    cy.get(".element-container [data-testid='stImage'] img")
      .should("have.css", "height", "100px")
      .should("have.css", "width", "100px");
  });

  it("displays a caption", () => {
    cy.get(
      ".element-container [data-testid='stImage'] [data-testid='caption']"
    ).should("contain", "Black Square");
  });

  it("displays a JPEG image when specified", () => {
    cy.get(".element-container [data-testid='stImage'] img")
      .eq(0)
      .should("have.attr", "src")
      .should("match", /^.*\.jpeg$/);
  });

  it("displays a PNG image when specified", () => {
    cy.get(".element-container [data-testid='stImage'] img")
      .eq(1)
      .should("have.attr", "src")
      .should("match", /^.*\.png$/);
  });

  it("displays a JPEG image when not specified with no alpha channel", () => {
    cy.get(".element-container [data-testid='stImage'] img")
      .eq(2)
      .should("have.attr", "src")
      .should("match", /^.*\.jpeg$/);
  });

  it("displays a PNG image when not specified with alpha channel", () => {
    cy.get(".element-container [data-testid='stImage'] img")
      .eq(3)
      .should("have.attr", "src")
      .should("match", /^.*\.png$/);
  });

  it("displays a 100x100 image when use_column_width is default, 'auto', 'never', or False", () => {
    for (const index of [4, 5, 6, 7]) {
      cy.get(".element-container [data-testid='stImage'] img")
        .eq(index)
        .matchImageSnapshot("black-square-100px");
    }
  });

  it("displays a column-width image when use_column_width is 'always', True, or size > column", () => {
    for (const index of [8, 9, 10]) {
      cy.get(".element-container [data-testid='stImage'] img")
        .eq(index)
        .matchImageSnapshot("black-square-column");
    }
  });

  it("displays SVG images that load external images", () => {
    cy.get("[data-testid='stImage'] svg")
      .eq(0)
      .matchImageSnapshot("karriebear-avatar");
  });

  it("displays links in text as text", () => {
    cy.get("[data-testid='stImage'] svg")
      .eq(1)
      .should("contain", "avatars.githubusercontent");
  });
});
