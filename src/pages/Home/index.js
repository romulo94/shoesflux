import React from 'react';

import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/sapatenis-casual-em-couro-sapatofran-mr-l-masculino/12/HAP-0149-012/HAP-0149-012_zoom1.jpg"
          alt="shoes-01"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={36} color="#FFF" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/sapatenis-sapatofran-elastico-masculino/04/HAP-0025-004/HAP-0025-004_zoom1.jpg"
          alt="shoes-01"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={36} color="#FFF" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/sapatenis-lona-sapatofran-polo-masculino/03/HAP-0176-003/HAP-0176-003_zoom1.jpg"
          alt="shoes-01"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={36} color="#FFF" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
