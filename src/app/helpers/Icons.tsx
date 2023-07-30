import React from "react";
import * as icons from "react-icons/fa6";
import { IconBaseProps } from "react-icons/lib";

interface IconProps extends IconBaseProps {
	iconName: string;
}

export const Icons: React.FC<IconProps> = ({iconName, title, size, color, ...props}) => {
	const Icon: any = icons[iconName as keyof object];

	return (
		<Icon
			size={size}
			color={color}
			{...props}
		/>
	);
};