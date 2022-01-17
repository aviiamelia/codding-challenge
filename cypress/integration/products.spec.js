context("products", () => {
  it("Enters the main page a render all the products in the showcase and adds to the cart", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);
    cy.get(".sc-ksdxgE :nth-child(1)").find("button").contains("ADD").click();
    cy.wait(750);
    cy.get(".sc-ksdxgE :nth-child(2)").find("button").contains("ADD").click();
    cy.wait(750);
    cy.get(".sc-ksdxgE :nth-child(3)").find("button").contains("ADD").click();
    cy.wait(750);
    cy.get(".sc-ksdxgE :nth-child(4)").find("button").contains("ADD").click();
    cy.wait(750);
    context("cart", () => {
      it("clicks on the buy button and finish the purchase emptying the cart");
      cy.contains("Buy").click();
      cy.wait(750);
      cy.contains("Finish purchase!!").click();
      cy.wait(750);
      cy.contains("Keep shopping!!").click();
    });
  });
});
