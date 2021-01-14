import styled from 'styled-components';
import FeaturePic from '../../images/coke-bg2.jpg'

export const FeatureContainer = styled.div `
    background : linear-gradient(to right , rgba(0,0,0,0.7) , rgba(0,0,0,0.1)),
    url(${FeaturePic});
    height: 100vh;
    max-height: 500px;
    background-position: center;
    color:#fff;
    background-size: cover;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    padding: 0 1rem;
    
    h1 {
        font-size: 80px;
    }

    p {
        margin-bottom : 1rem;
        font-size: 20px;
    }

`

export const FeatureButton = styled.button`
    font-size: 1.4rem;
    padding: 0.6rem 3rem;
    border: none;
    background: #ffc500;
    color: #000;
    transition: 0.2s ease-out;

    &:hover {
        color: #fff;
        background: #e31837;
        transition: 0.2s ease-out;
        cursor: pointer;
    }
`