import React from "react";
const BinaryCode: React.FC<
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
        d="M6 10V4H2v6zM17.5 10V4h-4v6zM17.5 20v-6h-4v6zM10.5 20v-6h-4v6z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m8.5 6 2-1.5v6M1.5 15.5l2-1.1v6M20 6l2-1.5v6M20 16l2-1.6v6"
      />
    </svg>
  );
};
export default BinaryCode;
