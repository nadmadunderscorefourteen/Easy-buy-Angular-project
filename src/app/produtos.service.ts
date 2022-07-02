import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: IProduto[] = produtos;
  
  constructor() { }

  //metodos que pegam todos os produtos, ou apenas o do id clicado
  getAll() {
    return this.produtos;
  }

  getOne(produtoId: number){
    return this.produtos.find(produto => produto.id = produtoId);
  }
}