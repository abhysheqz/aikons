import React from "react";
const Napkins_01: React.FC<
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
        d="M6.84 1.25H5.25v18.5h16.5v-1.533zm-.09 17.001V3.421l2.5 2.846v9.484h8.335l2.197 2.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m4 4.433-.16-.183H2.25v18.5h16.5v-1.533L18.56 21H4z"
      />
    </svg>
  );
};
export default Napkins_01;
