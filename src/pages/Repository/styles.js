import styled from 'styled-components';

export const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 30px;
    font-weight: bold;
`;

export const Owner = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;

    a{
        color: #7159c1;
        font-size: 16px;
        text-decoration: none;

        &:hover{
            text-decoration: underline;
        }
    }

    img{
        width: 120px;
        border-radius: 50%;
        margin-top: 20px;
    }

    h1{
        font-size: 24px;
        margin-top: 10px;
    }

    p{
        max-width: 400px;
        font-size: 14px;
        margin-top: 5px;
        color: #666;
        line-height: 1.4;
        text-align: center;
    }
`
