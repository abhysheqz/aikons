import React from "react";
const Motorbike_01: React.FC<
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
        d="M19.5 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M16 16.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 12a4 4 0 0 0-3.668 5.6 1 1 0 0 1-1.832.8 6 6 0 0 1 6.7-8.28 1 1 0 1 1-.399 1.96A4 4 0 0 0 19 12M4.5 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M1 16.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.876 6.72a1 1 0 0 1 .625-.22h3.5a1 1 0 0 1 .878 1.479l-2.717 4.979A2 2 0 0 1 11.406 14H9.97l-2.2 2.64a1 1 0 0 1-1.537-1.28l1.96-2.35L6.04 10.5H4a1 1 0 1 1 0-2h4.65z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.42 5H11a1 1 0 1 1 0-2h1.42a2 2 0 0 1 1.736 1.008l3.712 6.496a1 1 0 1 1-1.736.992z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Motorbike_01;
