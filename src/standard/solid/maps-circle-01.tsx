import React from "react";
const MapsCircle_01: React.FC<
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
        d="M13.828 5.25c-2.367 0-4.25 1.968-4.25 4.35 0 1.364.673 2.455 1.405 3.239.732.785 1.579 1.324 2.073 1.603a1.57 1.57 0 0 0 1.545 0c.493-.279 1.34-.818 2.073-1.603.731-.784 1.404-1.876 1.404-3.239 0-2.382-1.883-4.35-4.25-4.35m0 2.75a1.5 1.5 0 0 0 0 3h.01a1.5 1.5 0 0 0 0-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11c-2.56 0-4.915-.874-6.784-2.34a.293.293 0 0 1-.023-.439l4.832-4.833a.3.3 0 0 1 .424 0l4.948 4.949A9.003 9.003 0 0 0 12 3a9 9 0 0 0-8.337 5.603l4.949 4.948a.3.3 0 0 1 0 .424l-4.833 4.832a.293.293 0 0 1-.439-.023A10.95 10.95 0 0 1 1 12"
      />
    </svg>
  );
};
export default MapsCircle_01;
