import React from "react";
const Move_01: React.FC<
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
        fillRule="evenodd"
        d="M6.25 4.75a2.5 2.5 0 1 1 5 0v4.998c1.864.063 4.569.638 6.603 2.685.936.942.991 2.32.82 3.46-.175 1.17-.62 2.33-.992 3.107l-.931 2.155V22a.75.75 0 0 1-.75.75H7a.75.75 0 0 1-.75-.75v-.744l-4.462-5.703v-.001a2.53 2.53 0 0 1-.011-3.106 2.4 2.4 0 0 1 3.55-.292l.923.97zM17.47 1.47a.75.75 0 0 1 1.06-.001l1 .997a.75.75 0 0 1-.778 1.238v1.539h1.543a.75.75 0 0 1 1.237-.782l1 1.002a.75.75 0 0 1 0 1.058l-1 1.007a.75.75 0 0 1-1.237-.785h-1.541l.001 1.548a.75.75 0 0 1 .775 1.24l-1 1a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 0 1 .785-1.237l-.001-1.551h-1.55a.75.75 0 0 1-1.234.787l-1-1a.75.75 0 0 1 0-1.06l1-1a.75.75 0 0 1 1.24.773h1.543l-.001-1.536a.75.75 0 0 1-.782-1.238z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Move_01;
