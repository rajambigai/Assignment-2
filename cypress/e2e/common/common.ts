import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { activeLink, link } from "../../support/pageObjects/commonObject";

When("I visit the Home Page", () => {
  cy.visit("/index.html");
});

When("I visit the Menu Page", () => {
  cy.visit("/resources/pages/menu.html");
  cy.url().should("contain", "/resources/pages/menu.html");
});

When("I visit the Contact Page", () => {
  cy.visit("/resources/pages/contact.html");
  cy.url().should("contain", "/resources/pages/contact.html");
});

When("I visit the Gallery Page", () => {
  cy.visit("/resources/pages/gallery.html");
  cy.url().should("contain", "/resources/pages/gallery.html");
});

When("I visit the About Page", () => {
  cy.visit("/resources/pages/about.html");
  cy.url().should("contain", "/resources/pages/about.html");
});
Then("I should see Navigation bar and Links associated with it", () => {
  cy.get(".nav").should("be.visible");
});

Then("I should see hero section visibility on  screen", () => {
  cy.get(".hero").should("be.visible");
});

Then("I should see back to top button on  screen", () => {
  cy.get(".back-to-top").should("be.visible").click();
  cy.get(".sr").should("be.visible");
});
