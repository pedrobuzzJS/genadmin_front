import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RoleProvider } from "../context/RoleContext";
import { SideBarLayout } from "../components/Menu/SideBar/SideBar";
import { HomePage } from "../pages/Home/Home";
import { SnackBarProvider } from "../context/snackBarContext";
import { FormProvider } from "../context/formContext";
import { ExpenseTypeList } from "../pages/Consulta_Cadastros/TipoDespesa/TipoDespesaConsulta/TipoDespesaConsulta";
import { ExpenseTypeForm } from "../pages/Consulta_Cadastros/TipoDespesa/TipoDespesaCadastro/TipoDespesaCadastro";
import { MenuList } from "../pages/Consulta_Cadastros/Menus/MenuConsulta/MenuConsulta";
import { MenuForm } from "../pages/Consulta_Cadastros/Menus/MenuCadastro/MenuCadastro";
import { StatusList } from "../pages/Consulta_Cadastros/Status/StatusConsulta/StatusConsulta";
import { StatusForm } from "../pages/Consulta_Cadastros/Status/StatusCadastro/StatusCadastro";

const AuthRoutes = () => {
    return (
        <BrowserRouter>
            <SnackBarProvider>
                <SideBarLayout>
                    <FormProvider>
                            <Routes>
                                <Route path="/" element={<RoleProvider children={<HomePage />} funcao={[""]}/>}/>

                                <Route path="tipo-despesa" element={<RoleProvider children={<ExpenseTypeList />} funcao={[""]}/>}/>
                                <Route path="tipo-despesa-manutencao/:op/:id" element={<RoleProvider children={<ExpenseTypeForm />} funcao={[""]}/>}/>
                                <Route path="tipo-despesa-manutencao/:op" element={<RoleProvider children={<ExpenseTypeForm />} funcao={[""]}/>}/>

                                <Route path="menu" element={<RoleProvider children={<MenuList />} funcao={[""]}/>}/>
                                <Route path="menu-manutencao/:op/:id" element={<RoleProvider children={<MenuForm />} funcao={[""]}/>}/>
                                <Route path="menu-manutencao/:op" element={<RoleProvider children={<MenuForm />} funcao={[""]}/>}/>

                                <Route path="status" element={<RoleProvider children={<StatusList />} funcao={[""]}/>}/>
                                <Route path="status-manutencao/:op/:id" element={<RoleProvider children={<StatusForm />} funcao={[""]}/>}/>
                                <Route path="status-manutencao/:op" element={<RoleProvider children={<StatusForm />} funcao={[""]}/>}/>

                                <Route path="*" element={<h1>404</h1>} />
                            </Routes>
                    </FormProvider>
                </SideBarLayout>
            </SnackBarProvider>
        </BrowserRouter>
    );
};

export default AuthRoutes;