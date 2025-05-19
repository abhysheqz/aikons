import React from "react";
const DeletePutBack: React.FC<
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
        d="M2 5.493h6m0 0L9.5 2h5L16 5.493m-8 0h8m6 0h-6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M4.44 5.555 5.507 22h10.518c3.637 0 4.89-6.029-1.068-6.029h-2.675m2.675-2.985-3.034 2.985 3.034 2.982m4.549-13.467-.452 7.481"
      />
    </svg>
  );
};
export default DeletePutBack;
