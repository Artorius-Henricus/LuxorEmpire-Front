import './index.scss';
import { useEffect, useState, useRef} from 'react';
import { useNavigate} from 'react-router-dom'
import axios from 'axios';
import storage from 'local-storage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar';
import InputMask from 'react-input-mask';

export default function LoginUser({ isOpen, onClose, trocar}){
    useEffect(() => {
        if (isOpen) {
          document.body.classList.add('janela-open'); // Adicione uma classe ao body para evitar o scroll de fundo quando o modal estiver aberto
        } else {
          document.body.classList.remove('janela-open'); // Remova a classe quando o modal for fechado
        }
    }, [isOpen]);

    const [nomeUser, setNomeUser] = useState('');
    const [cpfUser, setCpfUser] = useState('');
    const [emailUser, setEmailUser] = useState('');
    const [senhaUser, setSenhaUser] = useState('');

    const [showPass, setShowPass] = useState(false);
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();
    const ref = useRef();

    const onlyNumbers = (str) => str.replace(/[^0-9]/g, "")

    async function Logar() {
        setLoading(true)
        let credenciais = {
            email: emailUser, 
            senha: senhaUser, 
            cpf: cpfUser, 
            nome: nomeUser
        }
        const url = "http://129.148.42.252:5019/usuario/logar";
        const resposta = await axios.post(url, credenciais)

        .then(response => {
            toast.success("Login Realizado!");
            ref.current.continuousStart()
            storage('user-info', response.data);

            setTimeout(() => {
                navigate('/perfil')
            }, 3000)
        })
  
        .catch(error => {
            setLoading(false)
            if (error.response.data.erro == "Incorrect date value: 'Formato de data inválido' for column 'dt_nascimento' at row 1"){
                toast.error("A Data Do Nascimento é Obrigatório!");
            }
            else {
                toast.error(""+error.response.data.erro);
                ref.current.complete();
            }
        });
    }

    return(
        <>
        <ToastContainer />
        <LoadingBar color='#ff0000' ref={ref} />
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
                        <input type="text" placeholder='E-mail' value={emailUser} onChange={e => setEmailUser(e.target.value)}/>
                        <InputMask mask='999.999.999-99' placeholder='CPF' value={cpfUser} onChange={e => setCpfUser(onlyNumbers(e.target.value))}/>
                    </div>

                    <div>
                        <input type="text" placeholder='Nome Completo' value={nomeUser} onChange={e => setNomeUser(e.target.value)}/>
                        <input type={`${showPass ? 'number' : 'password'}`} placeholder='Senha' value={senhaUser} onChange={e => setSenhaUser(e.target.value)}/>
                    </div>

                    <div id='passwordbox'>
                        <input type="checkbox" onClick={() => setShowPass(!showPass)}/>
                        <label>Mostrar Senha</label>
                    </div>
                </article>

                <button onClick={Logar} disabled={loading}>Fazer Login</button>
            </div>
        </div>

        <div className={`${isOpen ? 'active shadow' : ''}`} onClick={onClose}></div>
        </>
    )
}