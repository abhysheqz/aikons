import React from "react";
const GlobalSearch: React.FC<
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
        d="M11 22c-5.053-.502-9-4.815-9-10C2 6.477 6.477 2 12 2c5.185 0 9.498 3.947 10 9"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 5.699c-.935.067-2.132.43-2.962 1.504-1.5 1.94-2.999 2.103-3.999 1.456-1.5-.97-.239-2.543-1.999-3.397C9.893 4.705 9.733 3.19 10.372 2M2 11c.763.662 1.83 1.268 3.089 1.268 2.6 0 3.12.497 3.12 2.484s0 1.987.52 3.477c.338.97.456 1.938-.218 2.771"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m20 20 2 2m-1-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
      />
    </svg>
  );
};
export default GlobalSearch;
