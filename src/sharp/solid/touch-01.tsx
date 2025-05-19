import React from "react";
const Touch_01: React.FC<
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
        d="M8.25 3.75a2.5 2.5 0 0 1 5 0v4.998c1.864.063 4.569.638 6.603 2.685.936.942.991 2.32.82 3.46-.175 1.177-.626 2.343-.998 3.12l-1.033 2.155v2.582H8.102v-2.5l-4.318-5.703a2.53 2.53 0 0 1-.007-3.101 2.4 2.4 0 0 1 3.503-.337l.024.022.946.993z"
      />
    </svg>
  );
};
export default Touch_01;
