import React from "react";
const SaleTag_02: React.FC<
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
        d="M17.5 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2.774 11.144c-1.003 1.12-1.024 2.81-.104 4a34 34 0 0 0 6.186 6.186c1.19.92 2.88.899 4-.104a92 92 0 0 0 8.516-8.698 1.95 1.95 0 0 0 .47-1.094c.164-1.796.503-6.97-.902-8.374s-6.578-1.066-8.374-.901a1.95 1.95 0 0 0-1.094.47 92 92 0 0 0-8.698 8.515Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.788 12.367c.022-.401.134-1.135-.476-1.693m0 0a2.3 2.3 0 0 0-.797-.451c-1.257-.443-2.8 1.039-1.708 2.396.587.73 1.04.954.996 1.782-.03.582-.602 1.191-1.356 1.423-.655.202-1.378-.065-1.835-.576-.559-.624-.502-1.212-.507-1.468m5.208-3.105L14 9.986m-5.34 5.34-.653.653"
      />
    </svg>
  );
};
export default SaleTag_02;
