import './index.scss';

export default function AdmLogin() {

    return(
        <div className="pagina-adm-login">
            <article>
                <div className='leftside'>
                    <h1>Bem vindo de volta!</h1>
                    <img src="/assets/images/adm/Computer.svg" alt="" />
                </div>

                <div className='right-side'>
                    <h1>Login</h1>

                    <div>
                        <label>Nome de Usuário</label>
                        <input type="text" />
                    </div>

                    <div className='btlg'>
                        <label>Senha</label>
                        <div>
                            <input type="text" />
                            <button><img src="/assets/images/adm/5062877.svg" alt="" /></button>
                        </div>
                    </div>

                    <button>LOGIN</button>
                </div>
            </article>
        </div>
    )
}