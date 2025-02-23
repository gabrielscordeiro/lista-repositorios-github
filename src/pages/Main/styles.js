import styled, { keyframes, css } from 'styled-components';


export const Form = styled.form`
    display: flex;
    flex-direction: row;
    margin-top: 30px;

    input{
        flex: 1;
        border: 1px solid #eee;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 16px;
    }


`;

const rotate = keyframes`
    from{
        transform: rotate(0deg);
    } to{
        transform: rotate(360deg);
    }
`;

export const SubmitButton = styled.button.attrs(props => ({
    type: 'submit',
    disabled: props.loading
}))`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #7159c1;
    border: 0;
    padding: 0 15px;
    border-radius: 4px;
    margin-left: 10px;

    &[disabled]{
        cursor: not-allowed;
        opacity: 0.6;
    }

    ${props => props.loading && css`
        svg{
            animation: ${rotate} 2s linear infinite;
        }
    `}
`;

export const List = styled.ul`
    list-style: none;
    margin-top: 30px;

     li{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        padding: 15px 0;

        & + li{
            border-top: 1px solid #eee;
        }

        a{
            color: #7159c1;
            text-decoration: none;
        }
     }
`
