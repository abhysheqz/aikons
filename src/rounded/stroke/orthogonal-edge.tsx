import React from "react";
const OrthogonalEdge: React.FC<
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
        d="M8 6h1.78c2.017 0 3.025 0 3.534.241a2.5 2.5 0 0 1 1.211 3.276c-.229.515-.994 1.17-2.525 2.483-1.53 1.312-2.296 1.968-2.525 2.483a2.5 2.5 0 0 0 1.211 3.276c.51.241 1.517.241 3.534.241H16"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2 6a3 3 0 1 0 6 0 3 3 0 0 0-6 0ZM16 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z"
      />
    </svg>
  );
};
export default OrthogonalEdge;
