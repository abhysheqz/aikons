import React from "react";
const Spatula: React.FC<
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
        d="m18.036 8.009-3.006 3.004m1.002-5.007L13.025 9.01"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m9.055 12.98-6.643 6.694a1.39 1.39 0 0 0 1.97 1.961l6.306-6.297 1.316-1.329h4.027l5.944-5.95a.1.1 0 0 0 0-.141l-5.86-5.84a.1.1 0 0 0-.142-.001L10.01 8.005v4.004z"
      />
    </svg>
  );
};
export default Spatula;
