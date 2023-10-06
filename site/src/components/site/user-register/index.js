import './index.scss';
import { useEffect} from 'react';

export default function RegisterUser({ isOpen, onClose, trocar}){
    useEffect(() => {
        if (isOpen) {
          document.body.classList.add('janela-open'); // Adicione uma classe ao body para evitar o scroll de fundo quando o modal estiver aberto
        } else {
          document.body.classList.remove('janela-open'); // Remova a classe quando o modal for fechado
        }
      }, [isOpen]);

    return(
        <>
        <div className={`register-user ${isOpen ? 'active' : ''}`}>
            <div className='left-side'>
                <img src="/assets/images/cabecalho/01LogoBranca1.svg" alt="" />
                <h1>Bem Vindo de Volta!</h1>
                <h4>
                    Já possui uma conta?<br/>
                    Faça o Login com suas credenciais
                </h4>

                <button onClick={trocar}>Entrar</button>
            </div>
            <div className='right-side'>
                <button onClick={onClose} id='btfechar'>X</button>
                <h1>Criar Conta</h1>

                <article>
                    <div>
                        <input type="text" placeholder='E-mail'/>
                        <input type="text" placeholder='Endereço'/>
                    </div>

                    <div>
                        <input type="text" placeholder='Nome Completo'/>
                        <input type="date" placeholder='Nascimento'/>
                    </div>

                    <div>
                        <input type="text" placeholder='CPF'/>
                        <input type="number" placeholder='Senha'/>
                    </div>

                </article>

                <button>Cadastrar</button>
            </div>
        </div>

        <div className={`${isOpen ? 'active shadow' : ''} `} onClick={onClose}></div>
        </>
    )
}