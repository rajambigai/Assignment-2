///   <reference types="cypress" />
import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

Then("I should see Navigation bar visible on Gallery screen", () => {
  cy.get(".nav-item").eq(2).should("be.visible");
});
Then("I should see Explore button functionality on Gallery screen", () => {
  cy.get(".btn").should("be.visible").click();
});

Then("I should see title for Gallery screen", () => {
  cy.title().should("eq", "Shri Durga Darshini: Gallery");
  cy.get(".hero h1").should("be.visible");
});

Then("I should verify paragraph contents at footer top", () => {
  cy.get(".container h4").eq(0).should("not.have.css", "display", "none");
  cy.get(".asterisk").eq(2).should("not.have.css", "display", "none");
  cy.get("div p").eq(2).should("not.have.css", "display", "none");
});

Then("I should verify socialmedia call us and map at  bottom", () => {
  cy.get(".social-media").should("not.have.css", "display", "none");
  cy.get(".call-us").should("not.have.css", "display", "none");
  cy.get(".map").should("not.have.css", "display", "none");
});
