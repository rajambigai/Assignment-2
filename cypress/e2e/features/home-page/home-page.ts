///   <reference types="cypress" />
import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

Then("I should see title for Home screen", () => {
  cy.title().should("eq", "Shri Durga Darshini");
  cy.get(".hero h1").should("be.visible");
});

Then("I should see explore button functionality on Home screen", () => {
  cy.get(".btn").eq(0).should("be.visible").click();
});

Then("I should see Menu has {string} images", (length: string) => {
  cy.get(".discover-our-menu img").should("have.length", length);
});

Then("I should see PartyOrder has {string} images", (length: string) => {
  cy.get(".culinary-delight img").should("have.length", length);
});

Then("I should see navigation to other screens from the home screen", () => {
  cy.get(".nav-item").eq(1).click();
  cy.get(".nav-item").eq(2).click();
  cy.get(".nav-item").eq(3).click();
  cy.get(".nav-item").eq(4).click();
});

Then("I have to test About Us,Menu and Contact link from Home Page", () => {
  cy.get(".body-btn").eq(1).click();
  cy.visit("/index.html");
  cy.get(".btn").eq(2).click();
  cy.visit("/index.html");
  cy.get(".btn").eq(3).click();
});

Then("I should see paragraph and its content at footer top", () => {
  cy.get(".container h4").eq(0).should("not.have.css", "display", "none");
  cy.get(".asterisk").eq(4).should("not.have.css", "display", "none");
  cy.get("div p").eq(3).should("not.have.css", "display", "none");
});

Then("I should see socialmedia call us and map at footer bottom", () => {
  cy.get(".social-media").should("not.have.css", "display", "none");
  cy.get(".call-us").should("not.have.css", "display", "none");
  cy.get(".map").should("not.have.css", "display", "none");
});
