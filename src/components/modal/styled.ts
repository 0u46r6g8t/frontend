import styled from "styled-components";
import { ColorsFonts } from "../../css/fonts/Color";

export const ContainerModal = styled.div`
    position: fixed;
    width: 400px;
    top: 150px;
    right: 100px;
    border-radius: 12px;
    height: 400px;
    background: ${ColorsFonts.pureWhite};
    padding: 20px;
    display: flex;
    flex-direction: column;

    .header-car {
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 40px;
        border-bottom: 1px solid ${ColorsFonts.dark}
    }

    .info-car {
        margin: 10px 0 0;
        position: relative;
        height: 80%;

        .products-toCar {
            border: 1px solid black;
            display: flex;
            flex-direction: column;
            height: 220px;           
            max-height: 220px;
            padding: 4px;
            overflow-x: scroll;

            .product-toCar{
                display: flex;
                justify-content: space-between;
            }
        }

        .h4-info {
            margin: auto;
            position: absolute;
            flex-direction: column;
            align-items: center;
            bottom: 10px;
            border-top: 1px solid ${ColorsFonts.dark};
            
            .infos {
                display: flex;
                width: 100%;
                justify-content: space-between;

            }
        }
    }
`