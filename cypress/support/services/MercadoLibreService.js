class MercadoLibreService {

  baseUrl = 'https://www.mercadolibre.com.ar';

  getDepartments() {
    return cy.request({
      method: 'GET',
      url: `${this.baseUrl}/menu/departments`,
    })
  }
}

export default MercadoLibreService;