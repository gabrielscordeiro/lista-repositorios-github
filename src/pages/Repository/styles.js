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

export const IssueList = styled.ul`
    padding-top: 30px;
    margin-top: 30px;
    border-top: 1px solid #eee;
    list-style: none;

    li{
        display: flex;
        padding: 15px 10px;
        border: 1px solid #eee;
        border-radius: 4px;

        & + li{
            margin-top: 10px;
        }

        img{
            width: 36px;
            height: 36px;
            border-radius: 50%;
            border: 2px solid #eee;;
        }

        div{
            flex: 1;
            margin-left: 15px;

            strong{
                font-size: 16px;

                a{
                    text-decoration: none;
                    color: #333;

                    &:hover{
                        color: #7159c1;
                    }
                }

                span{
                    background: #eee;
                    color: #333;
                    border-radius: 3px;
                    font-size: 12px;
                    font-weight: 600px;
                    height: 20px;
                    padding: 3px 4px;
                    margin-left: 10px;
                }
            }

            p{
                margin-top: 5px;
                font-size: 12px;
                color: #999;
            }
        }
    }
`;
