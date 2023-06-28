import React from "react";
import { IconBaseProps } from "react-icons/lib"
import loadable from "@loadable/component";
interface IconProps extends IconBaseProps {
  iconName: string;
}

export const Icons: React.FC<IconProps> = ({iconName, title, size, color, ...props}) => {
  const lib = iconName.replace(/([a-z0-9])([A-Z])/g, '$1 $2').split(" ")[0].toLocaleLowerCase();

  const Icon: any = loadable(() => import(`react-icons/${lib}6`), {
    resolveComponent: (el: any) => el[iconName as keyof object]
  });

  return (
    <Icon
      size={size}
      color={color}
      {...props}
    />
  );
};