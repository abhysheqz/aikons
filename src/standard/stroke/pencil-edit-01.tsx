import React from "react";
const PencilEdit_01: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m14 7-8.608 8.608a2 2 0 0 0-.526.93L4 20l3.463-.866a2 2 0 0 0 .929-.526L17 10m-3-3 2.293-2.293a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414L17 10m-3-3 3 3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.5 20h6"
      />
    </svg>
  );
};
export default PencilEdit_01;
