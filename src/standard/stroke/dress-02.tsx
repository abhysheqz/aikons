import React from "react";
const Dress_02: React.FC<
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
        d="M9.5 9c-1.455-.5-2.23-1.011-2-3 .13-1.12.5-2-.5-3l2.5-1 1.732 2.078a1 1 0 0 0 1.536 0L14.5 2 17 3c-1 1-.63 1.88-.5 3 .23 1.989-.545 2.5-2 3M9 12h6V9H9zM16.312 21.448C17.6 22.184 19.628 22 21 21c-1.777-1.892-3.672-5.78-4.745-8.37a1.01 1.01 0 0 0-.935-.63H8.68c-.41 0-.778.25-.935.63C6.672 15.22 4.777 19.108 3 21c1.372 1 3.401 1.184 4.688.448a2.69 2.69 0 0 1 2.611 0c.524.295 1.163.552 1.701.552s1.177-.257 1.7-.552a2.69 2.69 0 0 1 2.612 0"
      />
    </svg>
  );
};
export default Dress_02;
