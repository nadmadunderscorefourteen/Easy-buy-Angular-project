import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];

  constructor() { }

  obtemCarrinho() {
     this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
     return this.itens;
    /* LocalStorage retorna um string, e como o objetivo é usar um object precisa converter para um json. Como estava antes: const carrinho = JSON.parse(localStorage.getItem("carrinho") || ""); return carrinho; */
  }

  adicionarAoCarrinho(produto: IProdutoCarrinho) {
    this.itens.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
    /* usa o localStorag para armazenar os itens do carrinho. Json.stringfy converte pra string, que é o formato compativel com o setItem. */
  }

  removerProdutoCarrinho(produtoId: number){
    this.itens = this.itens.filter(item => item.id !== produtoId);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
    //sobrescreve o localstorage mostrando os itens restantes
  }

  limparCarrinho() {
    this.itens = [];
    localStorage.clear();
  }

}
