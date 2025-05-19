import React from "react";
const Belt: React.FC<
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
        strokeWidth={1.5}
        d="M8.975 17.966C12.462 17.522 16 16.331 16 12s-3.538-5.523-7.025-5.965C6.621 5.735 6 7.42 6 9.412v5.176c0 1.992.62 3.676 2.975 3.377ZM2 7.5h4m-4 9h4m8-9h8m-8 9h8M5 12h5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 12h.009"
      />
    </svg>
  );
};
export default Belt;
