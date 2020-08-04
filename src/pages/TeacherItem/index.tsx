import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
                   <header>
                       <img src="https://avatars1.githubusercontent.com/u/57118248?s=460&u=e70619cbe871b4cc6b33a8dfdb56e48badcac020&v=4" alt="Augusto"/>
                       <div>
                           <strong>Augusto Batista</strong>
                            <span>Quimica</span>
                       </div>
                   </header>
                   <p>
                    Gato de Mochila quee apaixonado por Quimica.
                    <br/><br/>
                    Gosto de usar a quimica para descobrir misterios e ate mesmo conseguir que humanos possam me dar comida e carinho.
                   </p>

                   <footer>
                       <p>
                           Preço/Hora
                           <strong>R$ 100,00 </strong>
                       </p>
                       <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                       </button>
                   </footer>
               </article>
    )
}

export default TeacherItem;