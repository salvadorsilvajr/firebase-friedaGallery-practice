import React, { useContext, useState } from "react";
import { ContextTheme } from "./context/ContextTheme";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router";
import "dotenv/config";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EditarCurso from "./components/EditCurso";
import ProductScreen from "./components/ProductScreen";
import Inicio from "./screens/Inicio";
import Login from "./screens/Login";
import Register from "./screens/Register";
import AddPictureProfile from "./components/AddPictureProfile";
import Categorias from "./screens/Categorias";
import Catalago from "./screens/Catalago";
import GaleriaFotos from "./screens/GaleriaFotos";
import Testimonios from "./screens/Testimonios";
import QuienesSomos from "./screens/QuienesSomos";
import InfoPrices from "./screens/InfoPrices";
import CrearCuenta from "./screens/CrearCuenta";
import AlertMsg from "./components/AlertMsg";
import Error404 from "./components/Error404";
import { Getrole } from "./utils/Myfunction";

const App = () => {
    const { user } = useContext(ContextTheme);

    const { infoPrice } = useContext(ContextTheme);
    const myinfoRequest = infoPrice.filter((r) => r.status === 1);

    const [userRole, setUserRole] = useState(0);

    if (user) {
        Getrole(setUserRole);
    }

    return (
        <>
            <Header userRole={userRole} />
            {user && userRole === 1 && myinfoRequest && (
                <AlertMsg infoRequest={myinfoRequest} />
            )}
            <Container style={{ minHeight: "33em", marginTop: "12em" }}>
                <Switch>
                    <Route path='/' exact={true} component={Inicio} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                    <Route path='/GaleriaFotos' component={GaleriaFotos} />
                    <Route path='/Testimonios' component={Testimonios} />
                    <Route path='/InfoPrices' component={InfoPrices} />
                    <Route path='/QuienesSomos' component={QuienesSomos} />
                    <Route
                        path='/addpictureprofile'
                        component={AddPictureProfile}
                    />
                    <Route path='/admin/Categorias' component={Categorias} />
                    <Route path='/admin/Catalago' component={Catalago} />
                    <Route path='/admin/CrearCuenta' component={CrearCuenta} />
                    <Route
                        path='/admin/EditarCurso/:id'
                        component={EditarCurso}
                    />
                    <Route path='/product/:id' component={ProductScreen} />
                    <Route component={Error404} />
                </Switch>
            </Container>
            <Footer />
        </>
    );
};

export default App;
