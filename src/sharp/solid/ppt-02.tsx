import React from "react";
const Ppt_02: React.FC<
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
        d="m2.25 22.75.001-21.5h10.11l7.389 7.38V12H5v9h14.75v1.75zM17.8 9.46l-6.238-6.255V9.46zm-9.3 3.79H6.25v6.5h1.5v-2h.75a2.25 2.25 0 0 0 0-4.5m0 3h-.75v-1.5h.75a.75.75 0 0 1 0 1.5m5-3h-2.25v6.5h1.5v-2h.75a2.25 2.25 0 0 0 0-4.5m0 3h-.75v-1.5h.75a.75.75 0 0 1 0 1.5m8.25-3h-5.5v1.5h2v5h1.5v-5h2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Ppt_02;
