import React from "react";
const Blockchain_07: React.FC<
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
        d="M5.872 1.849a.75.75 0 0 0-.744 0l-3.5 2a.75.75 0 0 0-.378.651v4c0 .27.144.518.378.651l3.5 2a.75.75 0 0 0 .744 0l3.5-2A.75.75 0 0 0 9.75 8.5v-4a.75.75 0 0 0-.378-.651zM4.75 6.935l-2-1.143v2.272l2 1.143zm3.5 1.13-2 1.142V6.935l2-1.143zM18.872 1.849a.75.75 0 0 0-.744 0l-3.5 2a.75.75 0 0 0-.378.651v4c0 .27.144.518.378.651l3.5 2a.75.75 0 0 0 .744 0l3.5-2a.75.75 0 0 0 .378-.651v-4a.75.75 0 0 0-.378-.651zM17.75 6.935l-2-1.143v2.272l2 1.143zm3.5 1.13-2 1.142V6.935l2-1.143zM10.75 5.75h2.5v1.5h-2.5zM2.75 11.75v7h3.5v1.5h-5v-8.5zM22.75 11.75v8.5h-5v-1.5h3.5v-7zM14.5 16.179v-.965c0-1.375-1.134-2.464-2.5-2.464s-2.5 1.089-2.5 2.464v.965H7.75v6.071h8.5v-6.071zm-3.5-.965c0-.518.433-.964 1-.964s1 .446 1 .964v.965h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Blockchain_07;
