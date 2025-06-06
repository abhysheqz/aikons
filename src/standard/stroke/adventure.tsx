import React from "react";
const Adventure: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 21.679c.337.125.686.232 1.063.321C17.011 20.692 20.5 16.92 21 11M3.012 10c-.056-1.553.084-3.244.436-5.066 3.136.226 5.157-2.933 8.587-2.933q.506-.009.965.067"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6.557 19.559a1.497 1.497 0 0 1-2.118 0 1.497 1.497 0 1 1 2.118 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.499 14.99 19.002 8l1-4-4 1-7.011 8.48M6.979 17l2.51-2.51M6.003 12h.672a2 2 0 0 1 1.414.586l3.328 3.328a2 2 0 0 1 .586 1.414V18"
      />
    </svg>
  );
};
export default Adventure;
