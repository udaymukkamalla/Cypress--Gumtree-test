class HomePage {

    get searchInput(){
        return cy.get('[id="search-query"]');
    }

    get categoriesDropdown(){
        return cy.get('[id="categoryId-wrp"]');
    }

    get selectCategory(){
        return cy.get('[id="categoryId-wrp-option-20045"]');
    }

    get region(){
        return cy.get('[id="search-area"]');
    }

    get distance(){
        return cy.get('#srch-radius-input');
    }

    get distance20(){
        return cy.get('#srch-radius-wrp-option-20');
    }

    get search(){
        return cy.get('button[class="header__search-button"]');
    }

    get clickOnAd(){
        return cy.get('[id="user-ad-1295000759"]');
    }

}
export default HomePage;


