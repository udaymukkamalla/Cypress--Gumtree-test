//Pages
import HomePage from '../pages/HomePage.js';
import ProductPage from '../pages/ProductPage.js';

//Test Data
import { HomePageData } from '../fixtures/HomePageData';
import { AddData } from '../fixtures/AddData';

describe('Search Gumtree results', () => {
    
    const homepage   = new HomePage();
    const productpage   = new ProductPage();
    
    it('Verify search results', () => {
        cy.visit('/');
        homepage.searchInput.click();
        homepage.searchInput.type(HomePageData.searchInput);
        cy.log('Search input entered successfully');
        homepage.categoriesDropdown.click();
        homepage.selectCategory.click();
        cy.log('Category selected successfully');
        homepage.region.click()
        homepage.region.type(HomePageData.regionText);
        homepage.distance.click();
        cy.wait(3000);
        homepage.distance20.click();
        homepage.search.click();
        cy.log('Search results retrieved successfully');
        homepage.clickOnAd.click();
        cy.log('Successfully searched for a product and clicked on it');
        cy.url().should('include', AddData.adText);
        productpage.validateBreadcrumbs.contains(AddData.adText);
        productpage.similarAd.its('length').should('be.gt', 1);
        cy.log('Validated that there are similar ads available');
    })    
})