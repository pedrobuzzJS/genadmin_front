import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SnackBarProvider } from "../context/snackBarContext";
import { SideBarLayout } from "../components/Menu/SideBar/SideBar";
import { FormProvider } from "../context/formContext";
import { HomePage } from "../pages/Home/Home";
import { ExpenseTypeList } from "../pages/ListPages/TipoDespesaConsulta";
import { RoleProvider } from "../context/RoleContext";
import { ExpenseTypeForm } from "../pages/FormPages/ExpensiveTypeForm";
import { MenuList } from "../pages/ListPages/MenuList";
import { MenuForm } from "../pages/FormPages/MenuForm";
import { StatusList } from "../pages/ListPages/StatusList";
import { StatusForm } from "../pages/FormPages/StatusForm";


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