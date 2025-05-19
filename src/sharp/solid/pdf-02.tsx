import React from "react";
const Pdf_02: React.FC<
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
        d="m2.25 22.75.001-21.5h10.11l7.389 7.38V12H5v9h14.75v1.75zM17.8 9.46l-6.238-6.255V9.46zm-9.3 3.79H6.25v6.5h1.5v-2h.75a2.25 2.25 0 0 0 0-4.5m0 3h-.75v-1.5h.75a.75.75 0 0 1 0 1.5m5.286-3H11.75v6.5h2.036c1.34 0 2.464-1.062 2.464-2.417v-1.666c0-1.355-1.123-2.417-2.464-2.417m-.536 5v-3.5h.536c.552 0 .964.43.964.917v1.666c0 .487-.412.917-.964.917zm8.5-5h-4.5v6.5h1.5v-2.5h2.5v-1.5h-2.5v-1h3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pdf_02;
