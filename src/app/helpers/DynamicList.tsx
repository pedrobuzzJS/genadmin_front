import React from "react";
import { IconBaseProps } from "react-icons/lib"
import loadable from "@loadable/component";

interface IComponentLoader extends IconBaseProps {
  component: string;
}

export const DynamicComponentLoader: React.FC<IComponentLoader> = ({component}) => {
  const DynamicComponentListLoader = loadable(() => import(`../pages/ListPages/${component}`), {
    resolveComponent: (el) => {
        return el[component]
    }
});

  return (
    <DynamicComponentListLoader />
  );
};