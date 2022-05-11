class ProductPage {

    get similarAd(){
        return cy.get('[class="panel-body vip-similar-ads__slider-container"]');
    }

    get validateBreadcrumbs(){
        return cy.get('.breadcrumbs__desktop');
    } 

}
export default ProductPage;