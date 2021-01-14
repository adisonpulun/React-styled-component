import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoCloseCircleOutline } from 'react-icons/io5';

export const SidebarContainer = styled.div `
    color: #fff;
    position: fixed;
    z-index: 999;
    width: 350px;
    height: 100%;
    background: #DC0707;
    display: grid;
    align-items: center;
    top: 0;
    transition: 0.3s ease-in-out;
    right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};
    
    @media screen and (max-width: 400px){
        width: 100%;
    }
`;

export const Icon = styled.div `
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background:transparent;
    border:transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const CloseIcon = styled(IoCloseCircleOutline) `
    color: #000;

    &:hover{
        color: #fff;
    }
`;

export const SidebarMenu = styled.div `
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(3, 50px);
    }
`;

export const SidebarLink = styled(Link) `
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(1.5rem, 2.5vw ,3rem);
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #000;
        transition: 0.5s ease-in-out
    }
`;

export const SideBinWrap = styled.div `
    display: flex;
    justify-content: center;
`;

export const SIdebarRoute = styled(Link) `
    background: #000;
    white-space: nowrap;
    padding: 16px 64px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: 0.2s ease-in-out;
        text-decoration: none;
        background: #e3b167;
        color: #000;
    }
`;