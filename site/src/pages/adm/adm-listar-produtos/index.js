import "./index.scss";

import CompMenuBar from '../../../components/adm/menubar';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import storage from "local-storage"

export default function AdmListarProdutos() {
    const [adminInfos, setAdminInfos] = useState('')


    const navigate = useNavigate();
    useEffect(() => {
        if (!storage('admin-info')) {
            navigate('/adm')
        }
        else {
        setAdminInfos(storage('admin-info'));
        }
    }, [])

    const [aneis, setAneis] = useState([]);
    const [pingentes, setPingentes] = useState([]);
    const [brincos, setBrincos] = useState([]);
    const [pulseiras, setPulseiras] = useState([]);
    const [colares, setColares] = useState([]);
    const [relogios, setRelogios] = useState([]);

    async function Consultar(categoria, setadd) {
        const command = await axios.get(`http://localhost:5000/produto/consultar/${categoria}`);
        setadd(command.data)
    }

    useEffect(() => {
        Consultar("Anel", setAneis);
        Consultar("Pingente", setPingentes);
        Consultar("Brinco", setBrincos);
        Consultar("Pulseira", setPulseiras);
        Consultar("Colar", setColares);
        Consultar("Relogio", setRelogios);
    }, []);

    return(
        <div className="pagina-listar-produtos">
            <CompMenuBar />
            <div className="corpo">
                <h1>Lista de Produtos</h1>
                <article className="produtos">
                    <section>
                        <label>Anel</label>
                        <article className='box'>
                            <table>
                                <thead className="tcabeca">
                                    <tr>
                                        <th>Nome</th>
                                        <th>Material</th>
                                        <th>Gema</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody className="tcorpo">
                                    {aneis.map(item =>
                                    <tr>
                                        <td>{item.Nome}</td>
                                        <td>{item.Material}</td>
                                        <td>{item.Gema}</td>
                                        <td><Link to={`/adm/produtos/editar/${item.Id}`}><img src="/assets/images/adm/Pencil.svg" alt="" /></Link></td>
                                    </tr>
                                    )}
                                </tbody>
                            </table>
                        </article>

                        
                        <label>Brinco</label>
                        <article className='box'>
                            <table>
                                <thead className="tcabeca">
                                    <tr>
                                        <th>Nome</th>
                                        <th>Material</th>
                                        <th>Gema</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody className="tcorpo">
                                    {brincos.map(item =>
                                    <tr>
                                        <td>{item.Nome}</td>
                                        <td>{item.Material}</td>
                                        <td>{item.Gema}</td>
                                        <td><Link to={`/adm/produtos/editar/${item.Id}`}><img src="/assets/images/adm/Pencil.svg" alt="" /></Link></td>
                                    </tr>
                                    )}
                                </tbody>
                            </table>
                        </article>

                        <label>Colar</label>
                        <article className='box'>
                            <table>
                                <thead className="tcabeca">
                                    <tr>
                                        <th>Nome</th>
                                        <th>Material</th>
                                        <th>Gema</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody className="tcorpo">
                                    {colares.map(item =>
                                    <tr>
                                        <td>{item.Nome}</td>
                                        <td>{item.Material}</td>
                                        <td>{item.Gema}</td>
                                        <td><Link to={`/adm/produtos/editar/${item.Id}`}><img src="/assets/images/adm/Pencil.svg" alt="" /></Link></td>
                                    </tr>
                                    )}
                                </tbody>
                            </table>
                        </article>
                    </section>
                    <section>
                        <label>Pingente</label>
                        <article className='box'>
                            <table>
                                <thead className="tcabeca">
                                    <tr>
                                        <th>Nome</th>
                                        <th>Material</th>
                                        <th>Gema</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody className="tcorpo">
                                    {pingentes.map(item =>
                                    <tr>
                                        <td>{item.Nome}</td>
                                        <td>{item.Material}</td>
                                        <td>{item.Gema}</td>
                                        <td><Link to={`/adm/produtos/editar/${item.Id}`}><img src="/assets/images/adm/Pencil.svg" alt="" /></Link></td>
                                    </tr>
                                    )}
                                </tbody>
                            </table>
                        </article>

                        <label>Pulseira</label>
                        <article className='box'>
                            <table>
                                <thead className="tcabeca">
                                    <tr>
                                        <th>Nome</th>
                                        <th>Material</th>
                                        <th>Gema</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody className="tcorpo">
                                    {pulseiras.map(item =>
                                    <tr>
                                        <td>{item.Nome}</td>
                                        <td>{item.Material}</td>
                                        <td>{item.Gema}</td>
                                        <td><Link to={`/adm/produtos/editar/${item.Id}`}><img src="/assets/images/adm/Pencil.svg" alt="" /></Link></td>
                                    </tr>
                                    )}
                                </tbody>
                            </table>
                        </article>

                        <label>Relógio</label>
                        <article className='box'>
                            <table>
                                <thead className="tcabeca">
                                    <tr>
                                        <th>Nome</th>
                                        <th>Material</th>
                                        <th>Gema</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody className="tcorpo">
                                    {relogios.map(item =>
                                    <tr>
                                        <td>{item.Nome}</td>
                                        <td>{item.Material}</td>
                                        <td>{item.Gema}</td>
                                        <td><Link to={`/adm/produtos/editar/${item.Id}`}><img src="/assets/images/adm/Pencil.svg" alt="" /></Link></td>
                                    </tr>
                                    )}
                                </tbody>
                            </table>
                        </article>
                    </section>
                </article>
            </div>
        </div>
    )
}