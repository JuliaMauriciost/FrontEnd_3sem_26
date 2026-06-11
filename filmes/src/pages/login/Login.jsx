import Logo from "../../assets/img/logo.svg";
import "./Login.css";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BotaoLogin from "../../components/botaoLogin/BotaoLogin.jsx";
import { UsuarioContext } from "../../context/UsuarioContext.jsx";
import { jwtDecode } from "jwt-decode";
import Alerta from "../../components/Alerta/Alerta.jsx"
import api from "../../Services/services.js";
const Login = () => {
    const { usuario, setUsuario } = useContext(UsuarioContext);

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        if (usuario) {
            navigate("/filmes");
        }
    }, [usuario, navigate]);

    const login = async () => {
        if (email.trim().length === 0 || senha.trim().length === 0) {
            Alerta({
                title: "Login",
                text: "Preencher todos os campos",
                icon: "warning",
                confirmButtonText: "OK",
            });
            return;
        }

        const dadosLogin = {
            email,
            senha,
        };

        try {
            const retornoAPI = await api.post("/Login", dadosLogin);

            const token = retornoAPI.data.token;

            const usuarioDecoded = jwtDecode(token);

            setUsuario(usuarioDecoded);

            localStorage.setItem(
                "usuario",
                JSON.stringify(usuarioDecoded)
            );

            setEmail("");
            setSenha("");

            navigate("/generos");
        } catch (error) {
            console.log(error);

            Alerta({
                title: "Login",
                text: "Usuário ou senha inválidos",
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    };

    return (
        <main className="main_login">
            <div className="banner"></div>

            <section className="section_login">
                <img src={Logo} alt="Logo do Filmoteca" />

                <form className="form_login">
                    <h1>Login</h1>

                    <div className="campos_login">
                        <div className="campo_input">
                            <label htmlFor="email">Email:</label>

                            <input
                                type="email"
                                name="email"
                                placeholder="Digite seu e-mail"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                            />
                        </div>

                        <div className="campo_input">
                            <label htmlFor="senha">Senha:</label>

                            <input
                                type="password"
                                name="senha"
                                placeholder="Digite sua senha"
                                value={senha}
                                onChange={(e) =>
                                    setSenha(e.target.value)
                                }
                            />
                        </div>
                    </div>

                    <BotaoLogin
                        nomeDoBotao="Entrar"
                        onClick={(e) => {
                            e.preventDefault();
                            login()
                        }}
                    />
                </form>
            </section>
        </main>
    );
};

export default Login;