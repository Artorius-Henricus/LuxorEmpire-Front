import './index.scss';
import { useEffect, useState} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RegisterUser({ isOpen, onClose, trocar}){
    useEffect(() => {
        if (isOpen) {
          document.body.classList.add('janela-open'); // Adicione uma classe ao body para evitar o scroll de fundo quando o modal estiver aberto
        } else {
          document.body.classList.remove('janela-open'); // Remova a classe quando o modal for fechado
        }
      }, [isOpen]);

    const [nomeUser, setNomeUser] = useState('');
    const [cpfUser, setCpfUser] = useState('');
    const [telefoneUser, setTelefoneUser] = useState('');
    const [emailUser, setEmailUser] = useState('');
    const [senhaUser, setSenhaUser] = useState('');
    const [nasciUser, setNasciUser] = useState('');


    const [showPass, setShowPass] = useState(false);

    function inverterData(data) {
        const partes = data.split('-'); // Divide a data em partes usando o traço como separador
        if (partes.length === 3) {
          const dia = partes[0];
          const mes = partes[1];
          const ano = partes[2];
          
          // Monta a data invertida no formato "AAAA-MM-DD"
          const dataInvertida = `${ano}-${mes}-${dia}`;
          
          return dataInvertida;
        } else {
          return "Formato de data inválido";
        }
    }

    async function CadastrarUsuario(){
        setNasciUser(inverterData(nasciUser))
        let info = {
            nome: nomeUser.trim(),
            cpf: cpfUser.trim(),
            telefone: telefoneUser.trim(),
            email: emailUser.toLowerCase().trim(),
            senha: senhaUser.trim(),
            nascimento: nasciUser.trim()
        };
        const url = "http://localhost:5000/usuario/registrar";
        const command = await axios.post(url, info)

        .then(response => {
            toast.success("Registro Finalizado!");
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
        <>
        <ToastContainer />
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
                        <input type="text" placeholder='E-mail' value={emailUser} onChange={e => setEmailUser(e.target.value)}/>
                        <input type="date" placeholder='Nascimento' value={nasciUser} onChange={e => setNasciUser(e.target.value)}/>
                    </div>

                    <div>
                        <input type="number" placeholder='CPF' value={cpfUser} onChange={e => setCpfUser(e.target.value)}/>
                        <input type="number" placeholder='Telefone' value={telefoneUser} onChange={e => setTelefoneUser(e.target.value)}/>
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

                <button onClick={CadastrarUsuario}>Cadastrar</button>
            </div>
        </div>

        <div className={`${isOpen ? 'active shadow' : ''} `} onClick={onClose}></div>
        
        </>
    )
}