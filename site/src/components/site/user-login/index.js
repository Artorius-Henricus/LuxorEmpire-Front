import './index.scss';
    import { useEffect} from 'react';

export default function LoginUser({ isOpen, onClose, trocar}){
    useEffect(() => {
        if (isOpen) {
          document.body.classList.add('janela-open'); // Adicione uma classe ao body para evitar o scroll de fundo quando o modal estiver aberto
        } else {
          document.body.classList.remove('janela-open'); // Remova a classe quando o modal for fechado
        }
      }, [isOpen]);

    return(
        <>
        <div className={`login-user ${isOpen ? 'active' : ''}`}>
            <div className='left-side'>
                <img src="/assets/images/cabecalho/01LogoBranca1.svg" alt="" />
                <h1>Bem Vindo de Volta!</h1>
                <h4>
                    Não possui uma conta?<br/>
                    Crie uma agora para fazer suas compras!
                </h4>

                <button onClick={trocar}>Fazer Cadastro</button>
            </div>
            <div className='right-side'>
                <button onClick={onClose} id='btfechar'>X</button>
                <h1>Fazer Login</h1>

                <article>
                    <div>
                        <input type="text" placeholder='E-mail'/>
                        <input type="number" placeholder='CPF'/>
                    </div>

                    <div>
                        <input type="text" placeholder='Nome Completo'/>
                        <input type="number" placeholder='Senha'/>
                    </div>
                </article>

                <button>Fazer Login</button>
            </div>
        </div>

        <div className={`${isOpen ? 'active shadow' : ''} `} onClick={onClose}></div>
        </>
    )
}