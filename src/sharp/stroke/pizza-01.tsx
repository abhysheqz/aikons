import React from "react";
const Pizza_01: React.FC<
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
        d="M20.915 15.488a.1.1 0 0 0 .069-.114c-.61-3.252-1.97-6.052-4.138-8.22s-4.968-3.529-8.22-4.138a.1.1 0 0 0-.114.069L3.056 20.82a.1.1 0 0 0 .125.124z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7.5 6s.538.118 1.4.381c2.732.835 5.17 2.452 7.1 4.62"
      />
      <path stroke="currentColor" strokeWidth={2} d="M13.008 12h-.009" />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.002 17.176c-.226-1.102-.942-1.919-2.072-2.124-1.362-.248-2.64.645-2.909 2.124-.098.542-.093.85.08 1.395M6.33 8.982c1.06.376 1.626 1.322 1.673 2.47.057 1.384-.797 2.364-2.324 2.55-.223.01-.65-.079-.837-.093"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.009 12H13"
      />
    </svg>
  );
};
export default Pizza_01;
