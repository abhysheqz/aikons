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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 5.493h5m0 0 1.24-2.888A1 1 0 0 1 10.159 2h3.682a1 1 0 0 1 .919.605L16 5.493m-8 0h8m5 0h-5M15 13.5 12.5 16l2.5 2.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m4.5 5.5.886 14.621A2 2 0 0 0 7.382 22h8.643c3.638 0 4.89-6.029-1.068-6.029L12.5 16m7-10.5L19 13"
      />
    </svg>
  );
};
export default DeletePutBack;
