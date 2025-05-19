import React from "react";
const MouseRightClick_06: React.FC<
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
        d="m19.026 1.25-.881 1.5 1.724 1.013.881-1.5zm2.723 3.536-2-.5-.485 1.94 2 .5zM17.148 4.587C15.856 2.489 13.701 1.25 10.5 1.25S5.144 2.489 3.852 4.587C2.614 6.596 2.25 9.266 2.25 12s.364 5.404 1.602 7.413c1.292 2.098 3.447 3.337 6.648 3.337s5.356-1.239 6.648-3.337c1.238-2.009 1.602-4.679 1.602-7.413s-.364-5.404-1.602-7.413M15.5 5.617c.823 1.337 1.206 3.19 1.291 5.383h-5.29V9.5h.5a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75h-.5V3.256c2.012.217 3.227 1.109 3.999 2.36M4.21 11c.086-2.193.469-4.046 1.292-5.383.772-1.252 1.987-2.144 3.999-2.361V5h-.5a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h.5V11z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MouseRightClick_06;
