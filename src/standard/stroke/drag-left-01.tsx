import React from "react";
const DragLeft_01: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.804 8.5a3.5 3.5 0 1 0-3.608 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.999 22v-2l1.221-1.831c.509-.762.78-1.658.78-2.574 0-.72-.16-1.444-.66-1.964-.851-.886-2.62-2.131-5.845-2.131V6.501a1.501 1.501 0 1 0-3.002 0V15l-1.717-1.716a1.627 1.627 0 0 0-2.42.134c-.499.623-.47 1.517.067 2.108L11.493 20v2M9.5 5.5H4M5.5 3 3 5.5 5.5 8"
      />
    </svg>
  );
};
export default DragLeft_01;
