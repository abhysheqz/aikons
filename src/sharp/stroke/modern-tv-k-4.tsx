import React from "react";
const ModernTvK_4: React.FC<
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
        d="M22 2.5H2v16h20z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8 21.5h8M6.514 6.752v3.642a.1.1 0 0 0 .1.1l3.894.003m0 0V6.752m0 3.745v3.745m6.966-6.75-3.987 2.827m3.987 3.2-3.987-3.101m0-3.666v7.49"
      />
    </svg>
  );
};
export default ModernTvK_4;
