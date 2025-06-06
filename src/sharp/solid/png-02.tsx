import React from "react";
const Png_02: React.FC<
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
        d="m2.25 22.75.001-21.5h10.11l7.389 7.38V12H5v9h14.75v1.75zM17.8 9.46l-6.238-6.255V9.46zm-9.3 3.79H6.25v6.5h1.5v-2h.75a2.25 2.25 0 0 0 0-4.5m0 3h-.75v-1.5h.75a.75.75 0 0 1 0 1.5m4.121-3H11.25v6.5h1.5v-3.449l2.141 3.449h1.359v-6.5h-1.5v3.429zm9.129 0h-4.5v6.5h4.5v-3.5h-2.5v1.5h1v.5h-1.5v-3.5h1.5v1h1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Png_02;
