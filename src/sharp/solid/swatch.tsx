import React from "react";
const Swatch: React.FC<
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
        d="m20.613 8.146-4.821-3.542.888-1.208 6.07 4.458-11.479 14.61-1.18-.927z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.75 14v8a.75.75 0 0 1-.75.75H7.559c-3.462 0-6.309-2.724-6.309-6.135h1.5c0 2.538 2.13 4.635 4.809 4.635H21.25V14z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 1.25a.75.75 0 0 0-.75.75v5.25h12.5V2a.75.75 0 0 0-.75-.75zm11.75 7.5H1.25v3.5h12.5zm-12.5 5h12.5v2.694c0 3.476-2.791 6.306-6.25 6.306s-6.25-2.83-6.25-6.306zM7.5 16.5a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Swatch;
