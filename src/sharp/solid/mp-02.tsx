import React from "react";
const Mp_02: React.FC<
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
        d="m2.25 22.75.001-21.5h10.11l7.389 7.38V12H5v9h14.75v1.75zM17.8 9.46l-6.238-6.255V9.46zM7.568 13.25H6.25v6.5h1.5v-3.348l1.253 2.033 1.247-2.044v3.359h1.5v-6.5h-1.341l-1.412 2.315zm6.931 0h-2.25v6.5h1.5v-2h.75a2.25 2.25 0 0 0 0-4.5m0 3h-.75v-1.5h.75a.75.75 0 0 1 0 1.5m4.25-.5v-2.5h-1.5v4h3v2.5h1.5v-6.5h-1.5v2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mp_02;
