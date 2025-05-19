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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 17h8M19 17h3M12.5 5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m0 0c.167-.5.9-1.6 2.5-2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15 7.313 1.354-.593a2 2 0 0 1 2.538.84L22 13h-6v2.5a1.5 1.5 0 0 1-3 0V13H2l8.5-3.719"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 13v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6"
      />
    </svg>
  );
};
export default CheeseCake_01;
