import React from "react";
const StoreVerified_02: React.FC<
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
        strokeWidth={1.5}
        d="m14.735 6.987 1.503 1.496 3.006-2.992m2.755 1.496c0 2.755-2.243 4.988-5.01 4.988S11.98 9.742 11.98 6.987s2.243-4.988 5.01-4.988 5.009 2.233 5.009 4.988ZM8.978 5.99H3.956v1.99l-1.915 3.625c-.196.377.384 1.387.698 1.846q.098.14.243.277m16.01.75V21.9a.05.05 0 0 1-.05.05l-16.001.05a.05.05 0 0 1-.05-.05l.091-8.223m0 0c.329.31.816.583 1.234.628.984.196 1.877-.207 2.29-.572.608-.536.972-1.317.972-2.035m5.465 2.134a3.79 3.79 0 0 1-3.78.041c-.585-.315-1.702-1.177-1.702-2.156"
      />
    </svg>
  );
};
export default StoreVerified_02;
