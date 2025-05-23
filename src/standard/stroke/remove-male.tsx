import React from "react";
const RemoveMale: React.FC<
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
        d="M14.5 21h-12v-1.558a2 2 0 0 1 1.368-1.898L8.5 16v-1.938c-1.781-1.393-3-3.062-3-6.645C5.5 3.827 7.455 2 10.492 2c2.151 0 3.046 1 3.046 1C16.077 3 16.5 5.097 16.5 7.417c0 3.583-1.22 5.252-3 6.645V16M16.5 22l2.5-2.5m0 0 2.5-2.5M19 19.5 16.5 17m2.5 2.5 2.5 2.5"
      />
    </svg>
  );
};
export default RemoveMale;
