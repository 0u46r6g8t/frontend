import { useEffect } from "react"
import { useAppSelector } from "../../app/hooks"
import { ColorsFonts } from "../../css/fonts/Color"
import { Info } from "../../css/fonts/Div"
import { H1, H3, H4, H5, Paragraph } from "../../css/fonts/Title"
import { ContainerModal } from "./styled"

export const ByCarModal: React.FC = () => {
    const { car: { car: { listProducts }} } = useAppSelector(state => state);

    return (
        <ContainerModal>
            <div className="header-car">            
                <H1>Carrinho de compras</H1>
                <H5>X</H5>
            </div>

            <div className="info-car">
                <H3 className="products">Produtos adicionados</H3>

                <div className="products-toCar">{listProducts.map(item => 
                    <div key={item.name} className="product-toCar">
                        <p>
                            {item.name}
                        </p>

                        <H5>{item.price}</H5>
                    </div>
                )}</div>

                <Info className="h4-info">
                    <div className="infos">
                        <H4 color={ColorsFonts.pureBlack}>Valor total: </H4>                   
                        <Paragraph color={ColorsFonts.pureBlack}>0</Paragraph>
                    </div>

                    <div className="infos">
                        <H4 color={ColorsFonts.pureBlack}>Imposto pago: </H4>                   
                        <Paragraph color={ColorsFonts.pureBlack}>0</Paragraph>  
                    </div>
                </Info>                
                
                
            </div>
        </ContainerModal>
    )
}