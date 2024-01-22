import styled from "styled-components";

export const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`

export const Loading = styled.p`
    color: #fff;
    font-size: 18px;
`

export const DeployContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
`

export const ResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 450px;
    gap: 15px;

    font-size: 22px;
    letter-spacing: 1.5px;
    color: #fff;
    text-align: center;
    line-height: 28px;

    svg {
        width: 75px;
        height: 75px;
    }
`

export const ErrorText = styled.p`
    font-size: 16px;
    letter-spacing: 0.8px;
    color: #f9521a;
    text-align: center;
`

export const DeployButton = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    padding: 20px 40px;
    border-radius: 5px;
    background-color: #3c3c5d;
    height: 70px;
    drop-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    letter-spacing: 3.5px;

    color: #fff;
    font-size: 20px;
    font-weight: 600;
    text-transform: uppercase;

    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: #513ece;
    }

    svg {
        width: 43px;
        height: 43px;
    }
`