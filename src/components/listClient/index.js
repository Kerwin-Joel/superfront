import styled from 'styled-components'

export const ContainerList = styled.div`
    display: flex;
    padding: 20px 5%;
    align-items: center;
    justify-content: space-between;
    height: 75vh;

    & .left {
        background: rgba( 225, 86, 86, 0.05 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.17 );
        backdrop-filter: blur( 4px );
        border-radius: 10px;
        padding: 40px 20px ;
        padding-top: 10px ;

        &__scroll{
            border: 1px solid #e6e6e6;
            margin:4px, 4px;
            padding:4px;
            height: 100px;
            overflow-x: hidden;
            overflow-y: auto;
            text-align:justify;
            box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.17 );
            backdrop-filter: blur( 4px );
            border-radius: 10px;
            padding: 40px 20px ;
            padding-top: 10px ;
        }


    }
    & .rigth {
        background: rgba( 225, 86, 86, 0.05 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.17 );
        backdrop-filter: blur( 4px );
        border-radius: 10px;
        padding: 40px 20px ;
        padding-top: 10px ;
        & h2{
            margin-bottom: 0;
        }
        & p{
            padding-left: 20px;
        }
    }
`