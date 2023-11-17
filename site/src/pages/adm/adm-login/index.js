import { useRef, useState } from 'react';
import './index.scss';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import storage from 'local-storage'
import axios from 'axios';

export default function AdmLogin() {

    const [nomeUser, setNomeUser] = useState('');
    const [senhaUser, setSenhaUser] = useState('');

    const navigate = useNavigate();

    async function Logar() {
        let credenciais = {
            nome: nomeUser, 
            senha: senhaUser, 
        }
        const url = "http://129.148.42.252:5019/admin/logar";
        const resposta = await axios.post(url, credenciais)

        .then(response => {
            toast.success("Login Realizado!");
            storage('admin-info', response.data);

            setTimeout(() => {
                navigate('/adm/central')
            }, 3000)
        })

  
        .catch(error => {
            if (error.response.data.erro == "Incorrect date value: 'Formato de data inválido' for column 'dt_nascimento' at row 1"){
                toast.error("A Data Do Nascimento é Obrigatório!");
            }
            else {
                toast.error(""+error.response.data.erro);
            }
        });
    }

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
                        <label>Email</label>
                        <input type="text" value={nomeUser} onChange={e => setNomeUser(e.target.value)}/>
                    </div>

                    <div className='btlg'>
                        <label>Senha</label>
                        <div>
                            <input type="text" value={senhaUser} onChange={e => setSenhaUser(e.target.value)} />
                            <button><img src="/assets/images/adm/5062877.svg" alt="" /></button>
                        </div>
                    </div>

                    <button onClick={Logar}>LOGIN</button>
                </div>
            </article>
        </div>
    )
}