import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FieldTypes, GridFields } from "../../utils/Fields";
import { Operation } from "../../utils/Operation";
import { Button } from "../Form/Button/Button";
import { ButtonContainer, ButtonContainerGrid, Container, LoaderAltIcon, OrderColumnIcon, StyledTable, Tbody, TbodyTR, TbodyTRTD, TbodyTRTH, Thead, TheadTH, TheadTR } from "./style";
import { Blocks } from  'react-loader-spinner'

interface GridProps {
    columns: GridFields[],
    initialData: any,
    loading?: boolean,
    pathMantencao?: string;
};

interface OrderProps {
    name: string;
    order: ColumnOrder;
}

export type ColumnOrder = "asc" | "desc" | "sort";

export const DataGrid: React.FC<GridProps> = ({ columns, initialData, loading, pathMantencao, ...props }) => {
    const teste: any[] = initialData;
    const navigate = useNavigate();
    // const [ order, setOrder ] = useState<OrderProps[]>(
    //     [
    //         {
    //             name: "id",
    //             order: "sort",                
                
    //         },
    //         {
    //             name: "name",
    //             order: "sort",                
                
    //         },
    //         {
    //             name: "parameters",
    //             order: "sort"
    //         },
    //         {
    //             name: "route",
    //             order: "sort",                
                
    //         },
    //         {
    //             name: "icon",
    //             order: "sort",                
                
    //         },
    //         {
    //             name: "parent_id",
    //             order: "sort",                
                
    //         },
    //         {
    //             name: "status_id",
    //             order: "sort",                
    //         },
    //         {
    //             name: "created_at",
    //             order: "sort"
    //         },
    //         {
    //             name: "buttons",
    //             order: "sort"
    //         },
    //     ]
    // );

    const toggleSetOrder = useCallback(() => {
    }, []);

    const findValueById = useCallback((values: OrderProps[], key: any) => {
        const tt = values[values?.findIndex(item => item.name === key)]?.order;
        return tt;
    }, []);

    const buttonInserFormValues = useCallback( (op: number) => {
        let url = pathMantencao + `-manutencao/${op}`;
        return navigate("/"+url);
    }, [navigate, pathMantencao] );

    const buildMaintenanceURL = useCallback( (btn: string, op: number, id?: any) => {
        let url = btn + "-manutencao" + `/${op}` + `/${id}`;
        return navigate("/"+url);
    }, [navigate]);

    const handdleSelectButtonActions = useCallback( (btn: any, operation: number, id: number) => {
        switch(operation) {
            case Operation.ALTER:
                buildMaintenanceURL(btn, operation, id);
            break;
            case Operation.DELETE:
                buildMaintenanceURL(btn, operation, id);
            break;
            case Operation.VIEW:
                buildMaintenanceURL(btn, operation, id);
            break;
            default:
                console.log("botáo sem acao")
            break;
        }
    }, [buildMaintenanceURL]);

    return (
        <>
            <Container>
                {loading ? 
                    <LoaderAltIcon />
                :
                <>
                    <ButtonContainer>
                        <Button
                            buttonDescription="Inserir"
                            onClick={() => buttonInserFormValues(Operation.INSERT)}
                        />
                    </ButtonContainer>
                    <StyledTable>
                        <Thead>
                            <TheadTR>
                                {columns?.map( (column, index) => (
                                <TheadTH
                                    key={index}
                                >
                                    {column.title}
                                    {/* <OrderColumnIcon
                                       order={findValueById(order, column.field)}
                                    /> */}
                                </TheadTH>
                                ) )}
                            </TheadTR>
                        </Thead>
                        <Tbody>
                            {teste && teste?.map((item, index) => (
                            <TbodyTR
                                key={index}
                                isOdd={Boolean(index%2)}
                            >
                                {columns?.map( (column, index) => (
                                    column.type === FieldTypes.TEXT
                                ?
                                    <TbodyTRTD
                                        key={index}
                                    >
                                        {item[column?.field]}
                                    </TbodyTRTD>
                                :
                                column.type === FieldTypes.KEY
                                ?
                                <TbodyTRTH
                                    key={index}
                                >
                                    {item[column?.field]}
                                </TbodyTRTH>
                                :
                                column.type === FieldTypes.BUTTON
                                ?
                                <TbodyTRTD
                                    key={index}
                                >
                                    <ButtonContainerGrid
                                        key={index}
                                    >
                                        {column.buttons?.map((btn, index) => (
                                            <Button
                                                key={index}
                                                buttonDescription={btn.title}
                                                isDropDown={true}
                                                children={
                                                    <>
                                                        <Button
                                                            buttonDescription="Visualizar"
                                                            onClick={() => handdleSelectButtonActions(btn.button, Operation.VIEW, item.id)}
                                                        />
                                                        <Button
                                                            buttonDescription="Alterar"
                                                            onClick={() => handdleSelectButtonActions(btn.button, Operation.ALTER, item.id)}
                                                        />
                                                        <Button
                                                            buttonDescription="Deletar"
                                                            onClick={() => handdleSelectButtonActions(btn.button, Operation.DELETE, item.id)}
                                                        />
                                                    </>
                                                }
                                                
                                            />
                                        ))}
                                    </ButtonContainerGrid>
                                </TbodyTRTD>
                                :
                                <TbodyTRTD
                                    key={index}
                                >
                                </TbodyTRTD>
                                ) )}
                            </TbodyTR>
                            ))}
                        </Tbody>
                    </StyledTable>
                </>
                }
                <Blocks
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                />
            </Container>
        </>
    )
};