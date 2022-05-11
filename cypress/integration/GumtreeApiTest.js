import { pageUrls } from '../fixtures/PageUrls';
import { ApiData } from '../fixtures/ApiData';


describe('API test automation', function () {
    it('Send a GET request to validate the data', () => {
      cy.request({
        method: 'GET',
        url: pageUrls.apiRequest}).then((res) => {
        expect(res.body).not.to.be.empty;
        cy.log('Validated that the response body has content available');
        expect(res.status).to.eq(ApiData.statusCode);
        expect(res.isOkStatusCode).to.eq(true);
        cy.log('Validated the response codes');
        expect(res.headers).to.have.property('server', ApiData.server);
        expect(res.headers).to.have.property('content-type', ApiData.contentType);
        cy.log('Validated the headers');
        expect(res.body.ads[0]).to.have.property('categoryId');
        expect(res.body.ads[0]).to.have.property('adType');
        expect(res.body.ads[0]).to.have.property('posterType');
        cy.log('Successfully generates the data & validates the response type, response code etc');
        });
    });
});
