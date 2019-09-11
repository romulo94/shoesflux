import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      margin-bottom: 10px;
    }
  }

  img {
    transition: transform 0.25s;
    &:hover {
      transform: scale(0.9);
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: '#FFF';
    }
    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
