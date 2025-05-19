import React from "react";
const Passport_01: React.FC<
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
        d="M2 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 6h2.72a1 1 0 0 1 .97 1.243l-3.5 14a1 1 0 0 1-.97.757H13.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10 6a4 4 0 0 1 0 8m0-8a4 4 0 1 0 0 8m0-8c-.828 0-1.5 1.79-1.5 4s.672 4 1.5 4m0-8c.828 0 1.5 1.79 1.5 4s-.672 4-1.5 4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.5 17h7"
      />
    </svg>
  );
};
export default Passport_01;
