import { AppPage } from './app.po';
import {HomePage} from "./pages/mainpage";
import {browser, protractor} from "protractor";

describe('take-note App', () => {
  let page: AppPage;
  const homePage = new HomePage();
  var EC = protractor.ExpectedConditions;

  beforeEach(() => {
    page = new AppPage();
    browser.waitForAngularEnabled(false);
  });

  it('Insert note', () => {
    page.navigateTo();
    homePage.setFullBrowser();
    browser.sleep(2000);
    homePage.getListCount('lista-notas').then(function(amountBefore) {
      homePage.writeInput('Titulo de nota', 'titulo-nota');
      homePage.writeInput('Teste de conteúdo de nota', 'conteudo-nota');
      homePage.clickButon('botao-salvar');
      browser.sleep(2000);
      homePage.getListCount('lista-notas').then(function(amountAfter) {
        expect(amountAfter).toEqual(amountBefore + 1);
      });
    });
  });

  it('Delete note', () => {
    page.navigateTo();
    homePage.setFullBrowser();
    browser.sleep(2000);
    homePage.getListCount('lista-notas').then(function(amountBefore) {
      homePage.writeInput('Titulo de nota', 'titulo-nota');
      homePage.writeInput('Teste de conteúdo de nota', 'conteudo-nota');
      homePage.clickButon('botao-salvar');
      browser.sleep(2000);
      homePage.getList('lista-notas').get(0).click();
      homePage.clickButon('botao-deletar');
      browser.wait(EC.alertIsPresent(), 5000, "Alert is not getting present");
      browser.switchTo().alert().accept();
      browser.sleep(2000);
      homePage.getListCount('lista-notas').then(function(amountAfter) {
        expect(amountAfter).toEqual(amountBefore);
      });
    });
  });

  it('New note', () => {
    page.navigateTo();
    homePage.setFullBrowser();
    let titulo = 'Titulo de nota';
    let conteudo = 'Teste de conteúdo de nota';
    let tituloinput = homePage.getInput('titulo-nota');
    let conteudoInput = homePage.getInput('conteudo-nota');
    homePage.writeInput(titulo, 'titulo-nota');
    homePage.writeInput(conteudo, 'conteudo-nota');
    browser.sleep(2000);
    expect(tituloinput.getAttribute('value')).toEqual(titulo);
    expect(conteudoInput.getAttribute('value')).toEqual(conteudo);
    homePage.clickButon('botao-nova-nota');
    browser.sleep(2000);
    expect(tituloinput.getAttribute('value')).toEqual('');
    expect(conteudoInput.getAttribute('value')).toEqual('');
  });

});
