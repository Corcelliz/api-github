import styled from "styled-components";

export const Container = styled.div`
    padding: 1rem;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 0;

    @media screen and (max-width: 768px) {
        flex-direction: row;
        align-items: center;
    }
`;

export const Avatar = styled.img`
    align-self: center;
    border-radius: 50%;
    width: 70%;
    margin-bottom: 1rem;

    @media screen and (max-width: 768px){
        width: 70px;
        height: 70px;
        margin-right: 1rem;
        margin-bottom: 0;
    }
`;

export const Login = styled.h1`
    font-size: 1.5rem;
`;

export const Name = styled.h2`
    font-size: 1.06rem;
    font-weight: normal;

    @media screen and (max-width: 768px){
       display: none;
    }
`; 

export const Inner = styled.div`
    padding: 1rem;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const Data = styled.div`
    display: flex;
    align-items: center;
    line-height: 1.5;
    a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.white};
    }
    svg {
        margin-right: 10px;
    }
`;