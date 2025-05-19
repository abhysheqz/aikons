import React from "react";
const Zip_01: React.FC<
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
        d="M4.25 15.25h5v1.486L6.09 21.25h2.984v1.5H4.25v-1.486l3.16-4.514H4.25zm6 0h3.5v1.5h-1v4.5h1v1.5h-3.5v-1.5h1v-4.5h-1zm4.5 0h2.612c.869 0 2.058.44 2.32 1.63.087.398.084.78 0 1.17-.26 1.21-1.46 1.7-2.38 1.7H16.25v3h-1.5zm1.5 3h1.051c.555 0 .864-.282.915-.515.04-.188.04-.353 0-.533-.023-.106-.09-.208-.239-.297a1.2 1.2 0 0 0-.615-.155H16.25zM3.25 13.75l.001-12.5h10.11l7.389 7.38v5.12zM18.8 9.46l-6.238-6.255V9.46z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Zip_01;
