import React from "react";
const Popcorn: React.FC<
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
        d="m5 12 1.678 8.392A2 2 0 0 0 8.64 22h6.72a2 2 0 0 0 1.962-1.608L19 12"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.023 3.01C9.73.68 5.505 2.676 6.013 6.003 2.07 5.958 1.959 12 5.9 12h12.174c3.924 0 3.887-6.072-.036-6.027.476-3.316-3.734-5.283-6.016-2.963Z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m15 12-1 10" />
    </svg>
  );
};
export default Popcorn;
