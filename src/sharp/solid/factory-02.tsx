import React from "react";
const Factory_02: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M4.081 2.25a.75.75 0 0 0-.743.667l-.26 2.333h5.998l-.259-2.333a.75.75 0 0 0-.744-.667zM9.242 6.75h-6.33l-1.662 15h9.657z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.75 5.598V21.75H12.407q0-.083-.01-.165l-1.395-12.58 5.76-3.298v3.891zM16.02 15.75h-1.997v-1.5h1.996zm1.992 0h1.996v-1.5h-1.996z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Factory_02;
