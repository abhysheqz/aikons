import React from "react";
const CheeseCake_01: React.FC<
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
        d="M2 17h9M18 17h4M12.5 5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm0 0c.167-.5.9-1.6 2.5-2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 7.313 18 6l4 7h-6v2.5a1.5 1.5 0 0 1-3 0V13H2l8.5-3.719"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 13v8H2v-8"
      />
    </svg>
  );
};
export default CheeseCake_01;
