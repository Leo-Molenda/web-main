import { useState, useEffect } from 'react';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';

import api from '../../services/api';


import './styles.scss'
import Swiper from '../../components/Swiper/Swiper';
import { setConstantValue } from 'typescript';

// Até aqui são os import//
// daqui pra frente vem as const do grafico//


const data = [
  {
    data: {
      Seguranca: 1,
      Pertencimento: 1,
      Bem_estar: 1,
      Infraestrutura: 1
    },
    meta: { color: 'blue' }
  }];

interface Result {
  Seguranca?: number;
  Pertencimento?: number;
  Bem_estar?: number;
  Infraestrutura?: number;
}

// --------------------- //
const perguntas = [{
  pergunta: 'A PAV melhora a qualidade da minha vida e das pessoas ao meu redor (Vizinhos e Familiares) ',
  
},{
  pergunta: 'Sinto que a PAV é bom lugar para crianças',
  
},{
  pergunta: 'Sinto que a PAV é bom lugar para pessoas idosas',
  
},{
  pergunta: 'Sinto que a PAV é bom lugar para adolescentes e/ou jovens adultos',
  
},{
  pergunta: 'Sinto que a PAV é bom lugar para pets',
  
},{
  pergunta: 'Sinto que a prefeitura faz a manutenção corretamente do PAV',
  
},{
  pergunta: 'Sinto que a quantidade de árvores é suficiente?',
  
},{
  pergunta: 'Sinto que os bancos são suficientes e estão em bom estado',
  
},{
  pergunta: 'Sinto que a academia ao ar livre ou o parque infantil estão em bom estado',
  
},{
  pergunta: 'Sinto que campos ou as quadras esportivas estão em bom estado',
  
},{
  pergunta: 'Vou com frequência ao PAV',
  
},{
  pergunta: 'Eu sinto que os moradores próximos à PAV ajudam a manter o local limpo',
  
},{
  pergunta: 'Se vejo lixo jogado no chão da PAV, eu recolho',
  
},{
  pergunta: 'Eu gostaria que o PAV perto da minha casa fosse mais frequentado',
  
},{
  pergunta: 'Quando tem muitas pessoas no PAV, eu fico animado/a para ir',
  
},{
  pergunta: 'Me sinto segura(o) enquanto frequento ou passo pela PAV',
  
},{
  pergunta: 'Acredito que a PAV tem iluminação suficiente.',
  
},{
  pergunta: 'O PAV que eu frequento possui animais abandonados.',
  
},{
  pergunta: 'Sei que acontecem atividades ilegais no PAV',
  
},{
  pergunta: 'É um local seguro contra acidentes',

} ]

// uma constante de lista das perguntas //

// --------------------- //

export function SearchTask() {
  const[result,setResult] = useState<Result>();
  const[isReady,setIsReady] = useState(false);

// --------------------- //
  useEffect(()=>{
    console.log(result);
    if (
      result &&
      result.Seguranca &&
      result.Bem_estar &&
      result.Infraestrutura &&
      result.Pertencimento
    ) {
      setIsReady(true);
    }
  },)
    
  
  return (
    <div className='AppStyle'>
      
      <Swiper items={perguntas}/>
     
        
      
    </div>
  );
}

