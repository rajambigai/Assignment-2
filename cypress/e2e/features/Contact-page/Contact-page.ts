///   <reference types="cypress" />
import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

Then("I should see Navigation bar visible on Contact screen", () => {
  cy.get(".nav-item").eq(3).should("be.visible");
});
Then(
  "I should see Get the quote button functionality on Contact screen",
  () => {
    cy.get(".cta-btn ").eq(0).should("be.visible").click();
  }
);

Then("I should see title for Contact screen", () => {
  cy.title().should("eq", "Shri Durga Darshini: Contact");
  cy.get(".hero h1").should("be.visible");
});

Then("I should fill the form", () => {
  cy.get("#name").type("rajambigai");
  cy.get("#number").type("098765432");
  cy.get("#email").type("raja@gmail.com");
  cy.get("#address").type("23,thiruvallvar street");
  cy.get("#reason").type("function");
  cy.get("input").eq(4).type("2023-04-12T08:30");
  cy.get("#items").type("Idly,dosa");
});
Then("I should should see alert screen on submit", () => {
  cy.get(".cta-btn").eq(1).click();
});

Then("I should see paragraph at footer top", () => {
  cy.get(".container h4").eq(0).should("not.have.css", "display", "none");
  cy.get(".asterisk").eq(1).should("not.have.css", "display", "none");
  cy.get("div p").should("not.have.css", "display", "none");
});

Then("I should see socialmedia call us and map at Contact page bottom", () => {
  cy.get(".social-media").should("not.have.css", "display", "none");
  cy.get(".call-us").should("not.have.css", "display", "none");
  cy.get(".map").should("not.have.css", "display", "none");
});
