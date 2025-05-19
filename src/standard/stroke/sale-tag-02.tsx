import React from "react";
const SaleTag_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 2H12l-8.586 8.586a2 2 0 0 0 0 2.828l7.172 7.172a2 2 0 0 0 2.828 0L22 12z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M13.952 10.04c-.652-.641-1.626-.723-2.176-.183s-.53 1.155.328 1.998 1.003 1.545.292 2.243c-.711.699-1.572.412-2.283-.287m3.839-3.772L14.5 9.5m-.548.54c.315.309.497.693.539 1.068m-4.378 2.703-.548.539m.548-.54a2.08 2.08 0 0 1-.613-1.14"
      />
    </svg>
  );
};
export default SaleTag_02;
