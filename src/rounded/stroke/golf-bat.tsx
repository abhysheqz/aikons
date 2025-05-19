import React from "react";
const GolfBat: React.FC<
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
        d="M7.471 17.263 12 20.974c-.38.39-.745.79-1.282.947-.27.079-.558.079-1.136.079H6.646c-1.522 0-2.95-.486-3.487-2.065-.505-1.484.193-3.946 2.08-3.935.696.004 1.208.424 2.232 1.263M12 21l4.5-11M17.62 3.423 16.134 9a.635.635 0 0 0 1.165.479l2.864-5.012a1.385 1.385 0 1 0-2.541-1.044"
      />
    </svg>
  );
};
export default GolfBat;
