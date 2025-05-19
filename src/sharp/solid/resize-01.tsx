import React from "react";
const Resize_01: React.FC<
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
        d="m9.102 20.5-4.318-5.703a2.53 2.53 0 0 1-.007-3.101 2.4 2.4 0 0 1 3.503-.337l.025.022.945.993V4a2.5 2.5 0 0 1 5 0v4.998c1.864.063 4.57.638 6.603 2.685.936.942.992 2.32.82 3.46-.175 1.177-.626 2.343-.998 3.12l-.697 1.454-.336.7V23H9.102z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m19.043 1 1.414 1.414-.793.793h1.586v2h-1.585l.792.793-1.414 1.414-3.207-3.207zM4.457 1l3.207 3.207-3.207 3.207L3.043 6l.793-.793H2.25v-2h1.586l-.793-.793z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Resize_01;
