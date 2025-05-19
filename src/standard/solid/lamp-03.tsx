import React from "react";
const Lamp_03: React.FC<
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
        d="M10.293 1.25a2.75 2.75 0 0 0-2.521 1.652L5.42 8.301a1.75 1.75 0 0 0 1.604 2.448H11v7.501h-.28a1.75 1.75 0 0 0-1.66 1.197l-.6 1.803H8a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5h-.46l-.6-1.803a1.75 1.75 0 0 0-1.66-1.197H13v-7.5h1.467v2.249a1 1 0 1 0 2 0v-2.25h.495a1.75 1.75 0 0 0 1.6-2.458l-2.394-5.405a2.75 2.75 0 0 0-2.514-1.636z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Lamp_03;
