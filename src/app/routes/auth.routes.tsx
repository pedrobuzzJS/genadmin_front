import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SnackBarProvider } from "../context/snackBarContext";
import { SideBarLayout } from "../components/Menu/SideBar/SideBar";
import { FormProvider } from "../context/formContext";
import { HomePage } from "../pages/Home/Home";
import { RoleProvider } from "../context/RoleContext";
import { DynamicComponentLoader } from "../helpers/DynamicList";

const AuthRoutes = () => {
    return (
        <BrowserRouter>
            <SnackBarProvider>
                <SideBarLayout>
                    <FormProvider>
                            <Routes>
                                <Route path="/" element={<RoleProvider children={<HomePage />} funcao={[""]}/>}/>
                                <Route path="tipo-despesa" element={<RoleProvider children={<DynamicComponentLoader component="ExpenseTypeList" />} funcao={[""]}/>}/>
                                <Route path="menu" element={<RoleProvider children={<DynamicComponentLoader component="MenuList" />} funcao={[""]}/>}/>
                                <Route path="status" element={<RoleProvider children={<DynamicComponentLoader component="StatusList" />} funcao={[""]}/>}/>
                                <Route path="general-comfigs" element={<RoleProvider children={<DynamicComponentLoader component="GeneralConfig" />} funcao={[""]}/>}/>
                                <Route path="*" element={<h1>404</h1>} />
                            </Routes>
                    </FormProvider>
                </SideBarLayout>
            </SnackBarProvider>
        </BrowserRouter>
    );
};

export default AuthRoutes;