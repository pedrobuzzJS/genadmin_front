import React, { PropsWithChildren } from "react";
import { StyledGrid } from "./style";

export type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type Spacing = "sm" | "md" | "lg";
export type Justify = "start" | "center" | "end" | "space-between";
export type Direction = "column" | "row";

export interface IGridSystem extends PropsWithChildren {
    container?: boolean;
    item?: boolean;
    wrapper?: boolean
    cols?: Cols;
    spacing?: Spacing;
    height?: number;
    justify?: Justify;
    direction?: Direction;
    gap?: number,
    alignItems?: boolean,
    padding?: number;
}

export const GridSystem: React.FC<IGridSystem> = ({
    container=false,
    item=false,
    wrapper=false,
    direction="row",
    cols,
    height,
    children,
    justify,
    gap,
    alignItems=false,
    ...props
}) => {
    return (
        <StyledGrid
            container={container}
            item={item}
            cols={cols}
            justify={justify}
            direction={direction}
            gap={5}
            height={height}
            alignItems={alignItems}
            {...props}
        >
            {children}
        </StyledGrid>
    );
};