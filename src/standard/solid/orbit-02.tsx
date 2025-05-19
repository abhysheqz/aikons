import React from "react";
const Orbit_02: React.FC<
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
        d="M9.25 7a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3a9 9 0 0 0-9 9c0 1.067.185 2.09.525 3.037Q3.758 15 4 15a3 3 0 1 1-2.246 1.01A11 11 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11c-1.563 0-3.052-.326-4.4-.916a1 1 0 0 1 .8-1.832A9 9 0 0 0 12 21a9 9 0 1 0 0-18"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.17 8.634a1 1 0 0 1 .365 1.367A4 4 0 0 0 12 16a3 3 0 0 1 3.841-2.881q.157-.534.159-1.12c0-.73-.195-1.412-.534-2a1 1 0 1 1 1.73-1c.512.883.804 1.909.804 3 0 .839-.173 1.639-.484 2.365a3 3 0 0 1-4.79 3.591Q12.369 18 12 18a6 6 0 0 1-5.197-9 1 1 0 0 1 1.367-.366"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Orbit_02;
