///   <reference types="cypress" />
import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

Then("I should see explore button functionality on Menu screen", () => {
  cy.get(".btn").should("be.visible").click();
});

Then("I should see Navigation bar visible on Menu screen", () => {
  cy.get(".nav-item").eq(1).should("be.visible");
});

Then("I should see title for Menu screen", () => {
  cy.title().should("eq", "Shri Durga Darshini: Menu");
  cy.get(".hero h1").should("be.visible");
});

Then("I should see paragraph contents at footer top", () => {
  cy.get(".container h4").eq(0).should("not.have.css", "display", "none");
  cy.get(".asterisk").eq(1).should("not.have.css", "display", "none");
  cy.get("div p").should("not.have.css", "display", "none");
});

Then("I should see socialmedia call us and map at  bottom", () => {
  cy.get(".social-media").should("not.have.css", "display", "none");
  cy.get(".call-us").should("not.have.css", "display", "none");
  cy.get(".map").should("not.have.css", "display", "none");
});

Then(
  "I should see all {string} headings in screen is visible",
  (number: string) => {
    cy.get(".global-headline").should("have.length", number);
  }
);

Then(
  "I should see {string} images present in breakfast time",
  (length: string) => {
    cy.get("#discover-our-menu img").should("have.length", length);
  }
);

Then(
  "I should see {string} images present in breakfast allday",
  (length: string) => {
    cy.get('[data-sr-id="4"]')
      .should("not.have.css", "display", "none")
      .within(() => {
        cy.get("img").should("have.length", length);
      });
  }
);

Then("I should see {string} images present in Meals", (count: string) => {
  cy.get('[data-sr-id="2"]')
    .should("not.have.css", "display", "none")
    .within(() => {
      cy.get("img").should("have.length", count);
    });
});

Then("I should see {string} images present in Sweets", (number: string) => {
  cy.get('[data-sr-id="5"]')
    .should("not.have.css", "display", "none")
    .within(() => {
      cy.get("img").should("have.length", number);
    });
});

Then("I should see {string} images present in beverages", (number: string) => {
  cy.get('[data-sr-id="3"]')
    .should("not.have.css", "display", "none")
    .within(() => {
      cy.get("img").should("have.length", number);
    });
});
