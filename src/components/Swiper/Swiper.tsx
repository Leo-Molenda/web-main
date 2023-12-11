import React, { useEffect, useState } from "react";
import { Perguntas } from "../../types";
import "./Swiper.css";
import SwiperItem from "./SwiperItem";
import RadarChart from "react-svg-radar-chart";
import "./styles.scss"

let Infraestrutura = 0
let BemEstar = 0
let Segurança = 0
let Pertencimento = 0
const paisagismo = 0.3

export interface Result {
    battery?: number;
    design?: number;
    useful?: number;
    speed?: number;
    paisagismo?: number;
  }

export interface Props {
    items: Perguntas[];
};

function Swiper({ items }: Props) {

    const [result, setResult] = useState<Result>();
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        console.log(result);
        if (
          result &&
          result.battery &&
          result.design &&
          result.speed &&
          result.useful &&
          result.paisagismo
        ) {
          setIsReady(true);
        }
      }, [result]);

    return (
        <div>
            <div className='swiper-container'>
                <ul className='swiper-list'>
                    <li className="estiloBox">          
                        <h1> A PAV melhora a qualidade da minha vida e das pessoas ao meu redor (Vizinhos e Familiares) </h1>
                                <button className="button-3" role="button" onClick={
                                    () => {BemEstar += 1}
                                }
                        >
                            Concordo Totalmente
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {BemEstar += 0.8}
                                }
                        >
                            Concordo
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {BemEstar += 0.6}
                                }
                        >
                            Neutro
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {BemEstar += 0.4}
                                }
                        >
                            Discordo
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {BemEstar += 0.2}
                                }
                        >
                            Discordo Totalmente
                        </button>

                    </li>
                    <li className="estiloBox">          
                        <h1> Sinto que a PAV é bom lugar para crianças </h1>
                        <button className="button-3" role="button" onClick={
                                    () => {BemEstar += 1}
                                }
                        >
                            Concordo Totalmente
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {BemEstar += 0.8}
                                }
                        >
                            Concordo
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {BemEstar += 0.6}
                                }
                        >
                            Neutro
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {BemEstar += 0.4}
                                }
                        >
                            Discordo
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {BemEstar += 0.2}
                                }
                        >
                            Discordo Totalmente
                        </button>

                    </li>
                    <li className="estiloBox">          
                        <h1> Sinto que a PAV é bom lugar para pessoas idosas </h1>
                        <button className="button-3" role="button" onClick={
                                    () => {BemEstar += 1}
                                }
                        >
                            Concordo Totalmente
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {BemEstar += 0.8}
                                }
                        >
                            Concordo
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {BemEstar += 0.6}
                                }
                        >
                            Neutro
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {BemEstar += 0.4}
                                }
                        >
                            Discordo
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {BemEstar += 0.2}
                                }
                        >
                            Discordo Totalmente
                        </button>

                    </li>
                    <li className="estiloBox">  
                    <h1>Sinto que a PAV é bom lugar para adolescentes e/ou jovens adultos</h1>        
                    <button className="button-3" role="button" onClick={
                                    () => {BemEstar += 1}
                                }
                        >
                            Concordo Totalmente
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {BemEstar += 0.8}
                                }
                        >
                            Concordo
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {BemEstar += 0.6}
                                }
                        >
                            Neutro
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {BemEstar += 0.4}
                                }
                        >
                            Discordo
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {BemEstar += 0.2}
                                }
                        >
                            Discordo Totalmente
                        </button>

                    </li>
                    <li className="estiloBox">          
                        <h1> Sinto que a PAV é bom lugar para pets</h1>
                        <button className="button-3" role="button" onClick={
                                    () => {BemEstar += 1}
                                }
                        >
                            Concordo Totalmente
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {BemEstar += 0.8}
                                }
                        >
                            Concordo
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {BemEstar += 0.6}
                                }
                        >
                            Neutro
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {BemEstar += 0.4}
                                }
                        >
                            Discordo
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {BemEstar += 0.2}
                                }
                        >
                            Discordo Totalmente
                        </button>
                    </li>
                    <li className="estiloBox">          
                        <h1> Sinto que a prefeitura faz a manutenção corretamente do PAV </h1>
                        <button className="button-3" role="button" onClick={
                                    () => {Infraestrutura += 1}
                                }
                        >
                            Concordo Totalmente
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Infraestrutura += 0.8}
                                }
                        >
                            Concordo
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Infraestrutura += 0.6}
                                }
                        >
                            Neutro
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Infraestrutura += 0.4}
                                }
                        >
                            Discordo
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Infraestrutura += 0.2}
                                }
                        >
                            Discordo Totalmente
                        </button>
                    </li>
                    <li className="estiloBox">          
                        <h1> Sinto que a quantidade de árvores é suficiente? </h1>
                        <button className="button-3" role="button" onClick={
                                    () => {Infraestrutura += 1}
                                }
                        >
                            Concordo Totalmente
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Infraestrutura += 0.8}
                                }
                        >
                            Concordo
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Infraestrutura += 0.6}
                                }
                        >
                            Neutro
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Infraestrutura += 0.4}
                                }
                        >
                            Discordo
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Infraestrutura += 0.2}
                                }
                        >
                            Discordo Totalmente
                        </button>
                    </li>
                    <li className="estiloBox">          
                        <h1> Sinto que os bancos são suficientes e estão em bom estado </h1>
                        <button className="button-3" role="button" onClick={
                                    () => {Infraestrutura += 1}
                                }
                        >
                            Concordo Totalmente
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Infraestrutura += 0.8}
                                }
                        >
                            Concordo
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Infraestrutura += 0.6}
                                }
                        >
                            Neutro
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Infraestrutura += 0.4}
                                }
                        >
                            Discordo
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Infraestrutura += 0.2}
                                }
                        >
                            Discordo Totalmente
                        </button>

                    </li>
                    <li className="estiloBox">          
                        <h1> Sinto que a academia ao ar livre ou o parque infantil estão em bom estado </h1>
                        <button className="button-3" role="button" onClick={
                                    () => {Infraestrutura += 1}
                                }
                        >
                            Concordo Totalmente
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Infraestrutura += 0.8}
                                }
                        >
                            Concordo
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Infraestrutura += 0.6}
                                }
                        >
                            Neutro
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Infraestrutura += 0.4}
                                }
                        >
                            Discordo
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Infraestrutura += 0.2}
                                }
                        >
                            Discordo Totalmente
                        </button>

                    </li>
                    <li className="estiloBox">          
                        <h1> Sinto que campos ou as quadras esportivas estão em bom estado </h1>
                                <button className="button-3" role="button" onClick={
                                    () => {Infraestrutura += 1}
                                }
                        >
                            Concordo Totalmente
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Infraestrutura += 0.8}
                                }
                        >
                            Concordo
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Infraestrutura += 0.6}
                                }
                        >
                            Neutro
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Infraestrutura += 0.4}
                                }
                        >
                            Discordo
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Infraestrutura += 0.2}
                                }
                        >
                            Discordo Totalmente
                        </button>

                    </li>
                    <li className="estiloBox">          
                        <h1> Vou com frequência ao PAV </h1>
                        <button className="button-3" role="button" onClick={
                                    () => {Infraestrutura += 1}
                                }
                        >
                            Concordo Totalmente
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Infraestrutura += 0.8}
                                }
                        >
                            Concordo
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Infraestrutura += 0.6}
                                }
                        >
                            Neutro
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Infraestrutura += 0.4}
                                }
                        >
                            Discordo
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Infraestrutura += 0.2}
                                }
                        >
                            Discordo Totalmente
                        </button>
                    </li>
                    <li className="estiloBox">          
                        <h1> Eu sinto que os moradores próximos à PAV ajudam a manter o local limpo </h1>
                        <button className="button-3" role="button" onClick={
                                    () => {Pertencimento += 1}
                                }
                        >
                            Concordo Totalmente
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Pertencimento += 0.8}
                                }
                        >
                            Concordo
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Pertencimento += 0.6}
                                }
                        >
                            Neutro
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Pertencimento += 0.4}
                                }
                        >
                            Discordo
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Pertencimento += 0.2}
                                }
                        >
                            Discordo Totalmente
                        </button>
                    </li>
                    <li className="estiloBox">          
                        <h1> Se vejo lixo jogado no chão da PAV, eu recolho </h1>
                        <button className="button-3" role="button" onClick={
                                    () => {Pertencimento += 1}
                                }
                        >
                            Concordo Totalmente
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Pertencimento += 0.8}
                                }
                        >
                            Concordo
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Pertencimento += 0.6}
                                }
                        >
                            Neutro
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Pertencimento += 0.4}
                                }
                        >
                            Discordo
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Pertencimento += 0.2}
                                }
                        >
                            Discordo Totalmente
                        </button>

                    </li>
                    <li className="estiloBox">          
                        <h1> Eu gostaria que o PAV perto da minha casa fosse mais frequentado </h1>
                        <button className="button-3" role="button" onClick={
                                    () => {Pertencimento += 1}
                                }
                        >
                            Concordo Totalmente
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Pertencimento += 0.8}
                                }
                        >
                            Concordo
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Pertencimento += 0.6}
                                }
                        >
                            Neutro
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Pertencimento += 0.4}
                                }
                        >
                            Discordo
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Pertencimento += 0.2}
                                }
                        >
                            Discordo Totalmente
                        </button>

                    </li>
                    <li className="estiloBox">          
                        <h1> Quando tem muitas pessoas no PAV, eu fico animado/a para ir </h1>
                        <button className="button-3" role="button" onClick={
                                    () => {Pertencimento += 1}
                                }
                        >
                            Concordo Totalmente
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Pertencimento += 0.8}
                                }
                        >
                            Concordo
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Pertencimento += 0.6}
                                }
                        >
                            Neutro
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Pertencimento += 0.4}
                                }
                        >
                            Discordo
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Pertencimento += 0.2}
                                }
                        >
                            Discordo Totalmente
                        </button>
                    </li>
                    <li className="estiloBox">          
                        <h1> Me sinto segura(o) enquanto frequento ou passo pela PAV </h1>
                        <button className="button-3" role="button" onClick={
                                    () => {Segurança += 1}
                                }
                        >
                            Concordo Totalmente
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Segurança+= 0.8}
                                }
                        >
                            Concordo
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Segurança += 0.6}
                                }
                        >
                            Neutro
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Segurança += 0.4}
                                }
                        >
                            Discordo
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Segurança += 0.2}
                                }
                        >
                            Discordo Totalmente
                        </button>

                    </li>
                    <li className="estiloBox">          
                        <h1> Acredito que a PAV tem iluminação suficiente. </h1>
                        <button className="button-3" role="button" onClick={
                                    () => {Segurança += 1}
                                }
                        >
                            Concordo Totalmente
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Segurança+= 0.8}
                                }
                        >
                            Concordo
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Segurança += 0.6}
                                }
                        >
                            Neutro
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Segurança += 0.4}
                                }
                        >
                            Discordo
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Segurança += 0.2}
                                }
                        >
                            Discordo Totalmente
                        </button>


                    </li>
                    <li className="estiloBox">          
                        <h1> O PAV que eu frequento possui animais abandonados. </h1>
                        <button className="button-3" role="button" onClick={
                                    () => {Segurança += 1}
                                }
                        >
                            Concordo Totalmente
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Segurança+= 0.8}
                                }
                        >
                            Concordo
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Segurança += 0.6}
                                }
                        >
                            Neutro
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Segurança += 0.4}
                                }
                        >
                            Discordo
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Segurança += 0.2}
                                }
                        >
                            Discordo Totalmente
                        </button>


                    </li>
                    <li className="estiloBox">          
                        <h1> Sei que acontecem atividades ilegais no PAV </h1>
                        <button className="button-3" role="button" onClick={
                                    () => {Segurança += 1}
                                }
                        >
                            Concordo Totalmente
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Segurança+= 0.8}
                                }
                        >
                            Concordo
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Segurança += 0.6}
                                }
                        >
                            Neutro
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Segurança += 0.4}
                                }
                        >
                            Discordo
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Segurança += 0.2}
                                }
                        >
                            Discordo Totalmente
                        </button>


                    </li>
                    <li className="estiloBox">          
                        <h1> É um local seguro contra acidentes </h1>
                        <button className="button-3" role="button" onClick={
                                    () => {Segurança += 1}
                                }
                        >
                            Concordo Totalmente
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Segurança+= 0.8}
                                }
                        >
                            Concordo
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Segurança += 0.6}
                                }
                        >
                            Neutro
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Segurança += 0.4}
                                }
                        >
                            Discordo
                        </button>
                        <button className="button-3" role="button" onClick={
                                    () => {Segurança += 0.2}
                                }
                        >
                            Discordo Totalmente
                        </button>

                    </li>
                    <li className="estiloBox">          
                        <h1> Gerar Gráfico! </h1>
                        <button className="button-3" role="button" onClick={(prevValue) => {
                                setResult((prevValue: any) => ({
                                ...prevValue,
                                useful: (BemEstar/5),
                                battery: (Infraestrutura/6),
                                design: (Pertencimento/4),
                                speed: (Segurança/5),
                                paisagismo: paisagismo

                                }));
                            }}
                            >
                                Gráfico!
                            </button>
                    </li>

                        
                </ul>
            </div>
            
                        
                {isReady && (
                    <div>
                    <RadarChart
                        captions={{
                        // columns
                        battery: 'Infraestrutura',
                        design: 'Pertencimento',
                        useful: 'Bem Estar',
                        speed: 'Segurança',
                        paisagismo: 'Paisagismo'
                        }}
                        data={[
                        // data
                        {
                            data: {
                            ...result,
                            },
                            meta: { color: '#58FCEC' },
                        },
                        ]}
                        size={800}
                    />
                    </div>
                )}   
            
        </div>
    )
}

export default Swiper;