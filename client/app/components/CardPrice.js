import { Button } from '@heroui/react';
import React from 'react';
import styled from 'styled-components';

const Card = ({ cor }) => {
  return (
    <StyledWrapper>
      <div className={`card ${cor}`}>
        <p className="price">
          $ 0
        </p>
        <ul className="lists">
          <li className="list">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g strokeWidth={0} id="SVGRepo_bgCarrier" /><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier" /><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z" clipRule="evenodd" fillRule="evenodd" /> </g></svg>
            <span> Aprimorar os conhecimentos </span>
          </li>
          <li className="list">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g strokeWidth={0} id="SVGRepo_bgCarrier" /><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier" /><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z" clipRule="evenodd" fillRule="evenodd" /> </g></svg>
            <span> Aprender como dev </span>
          </li>
          <li className="list">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g strokeWidth={0} id="SVGRepo_bgCarrier" /><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier" /><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z" clipRule="evenodd" fillRule="evenodd" /> </g></svg>
            <span> Passar conhecimento a diante </span>
          </li>
          <li className="list">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g strokeWidth={0} id="SVGRepo_bgCarrier" /><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier" /><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z" clipRule="evenodd" fillRule="evenodd" /> </g></svg>
            <span> Evoluir na carreira </span>
          </li>
          <li className="list">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g strokeWidth={0} id="SVGRepo_bgCarrier" /><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier" /><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z" clipRule="evenodd" fillRule="evenodd" /> </g></svg>
            <span> Maneira divertida de aprender </span>
          </li>
          <li className="list">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g strokeWidth={0} id="SVGRepo_bgCarrier" /><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier" /><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z" clipRule="evenodd" fillRule="evenodd" /> </g></svg>
            <span> Perfeito para explicar de uma forma clara </span>
          </li>
        </ul>
        <Button className="action" isDisabled>
          Garantir Agora
        </Button>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    max-width: 320px;
    display: flex;
    flex-direction: column;
    border-radius: 2rem;
    padding: 1.5rem;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.3);
  }

  .price {
    font-size: 3rem;
    line-height: 1;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
  }

  .lists {
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
    grid-row-gap: 0.75rem;
    row-gap: 0.75rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: rgba(255, 255, 255, 1);
  }

  .list {
    display: flex;
    align-items: center;
  }

  .list svg {
    height: 1rem;
    width: 1rem;
  }

  .list span {
    margin-left: 1rem;
  }

  .action {
    margin-top: 2rem;
    width: 100%;
    border: 2px solid  rgba(255, 255, 255, 1);
    border-radius: 9999px;
    background-color: rgba(255, 255, 255, 1);
    padding: 0.625rem 1.5rem;
    font-weight: 600;
    text-align: center;
    font-size: 0.875rem;
    color: rgba(0, 0, 0, 1);
    outline: none;
    text-decoration: none;
    transition: all .2s ease;
  }

  .action:hover {
    color: rgba(255, 255, 255, 1);
    background-color: transparent;
  }`;

export default Card;
