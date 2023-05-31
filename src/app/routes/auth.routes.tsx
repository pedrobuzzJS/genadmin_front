import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RoleProvider } from "../context/RoleContext";
import { SideBarLayout } from "../components/Menu/SideBar/SideBar";
import { HomePage } from "../pages/Home/Home";
import { SnackBarProvider } from "../context/snackBarContext";
import { FormProvider } from "../context/formContext";
import { TipoDespesaConsulta } from "../pages/Consulta_Cadastros/TipoDespesa/TipoDespesaConsulta/TipoDespesaConsulta";
import { TipoDespesaCadastro } from "../pages/Consulta_Cadastros/TipoDespesa/TipoDespesaCadastro/TipoDespesaCadastro";
import { MenuConsulta } from "../pages/Consulta_Cadastros/Menus/MenuConsulta/MenuConsulta";
import { MenuCadastro } from "../pages/Consulta_Cadastros/Menus/MenuCadastro/MenuCadastro";
import { StatusConsulta } from "../pages/Consulta_Cadastros/Status/StatusConsulta/StatusConsulta";
import { StatusCadastro } from "../pages/Consulta_Cadastros/Status/StatusCadastro/StatusCadastro";
import { FormFieldsTests } from "../pages/FormFieldsTests";

const AuthRoutes = () => {
    return (
        <BrowserRouter>
            <SnackBarProvider>
                <SideBarLayout>
                    <FormProvider>
                            <Routes>
                                <Route path="/" element={<RoleProvider children={<HomePage />} funcao={[""]}/>}/>

                                <Route path="tipo-despesa" element={<RoleProvider children={<TipoDespesaConsulta />} funcao={[""]}/>}/>
                                <Route path="tipo-despesa-manutencao/:op/:id" element={<RoleProvider children={<TipoDespesaCadastro />} funcao={[""]}/>}/>
                                <Route path="tipo-despesa-manutencao/:op" element={<RoleProvider children={<TipoDespesaCadastro />} funcao={[""]}/>}/>

                                <Route path="menu" element={<RoleProvider children={<MenuConsulta />} funcao={[""]}/>}/>
                                <Route path="menu-manutencao/:op/:id" element={<RoleProvider children={<MenuCadastro />} funcao={[""]}/>}/>
                                <Route path="menu-manutencao/:op" element={<RoleProvider children={<MenuCadastro />} funcao={[""]}/>}/>

                                <Route path="status" element={<RoleProvider children={<StatusConsulta />} funcao={[""]}/>}/>
                                <Route path="status-manutencao/:op/:id" element={<RoleProvider children={<StatusCadastro />} funcao={[""]}/>}/>
                                <Route path="status-manutencao/:op" element={<RoleProvider children={<StatusCadastro />} funcao={[""]}/>}/>

                                <Route path="fields-test" element={<RoleProvider children={<FormFieldsTests />} funcao={[""]}/>}/>

                                <Route path="*" element={<h1>404</h1>} />
                            </Routes>
                    </FormProvider>
                </SideBarLayout>
            </SnackBarProvider>
        </BrowserRouter>
    );
};

export default AuthRoutes;