///   <reference types="cypress" />
import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

Then("I should see Navigation bar visible on About screen", () => {
  cy.get(".nav-item").eq(4).should("be.visible");
});
Then("I should see title for About screen", () => {
  cy.title().should("eq", "Shri Durga Darshini: About");
  cy.get(".hero h1").should("be.visible");
});

Then("I should verify paragraph  at footer top", () => {
  cy.get(".container h4").eq(0).should("not.have.css", "display", "none");
  cy.get(".asterisk").eq(4).should("not.have.css", "display", "none");
  cy.get("div p").eq(3).should("not.have.css", "display", "none");
});

Then("I should verify socialmedia call us and map at about bottom", () => {
  cy.get(".social-media").should("not.have.css", "display", "none");
  cy.get(".call-us").should("not.have.css", "display", "none");
  cy.get(".map").should("not.have.css", "display", "none");
});
