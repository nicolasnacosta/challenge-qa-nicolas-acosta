import MercadoLibreService from "../../support/services/MercadoLibreService";

describe('MercadoLibre API', () => {

  const mercadoLibreService = new MercadoLibreService();
    it('Obtener departamentos', () => {
        mercadoLibreService.getDepartments().then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.any.keys('departments');
            expect(response.body.departments).to.be.an('array');
            expect(response.body.departments.length).greaterThan(0);
        })
    })
})