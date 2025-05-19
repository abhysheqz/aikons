import React from "react";
const PoliceCap: React.FC<
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
        d="M4.142 14.009c-1.474 1.326-1.931 4.58 1.164 5.388 2.057.537 5.397 1.298 6.695 1.618 1.298-.32 4.638-1.081 6.695-1.618 3.096-.808 2.638-4.062 1.164-5.388"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m14.001 8.004-2-1.001-2 1c0 1.502.775 2.598 2 3.003 1.225-.405 2-1.501 2-3.002"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20.149 7.99c-1.607-1.62-5.782-3.9-8.143-4.972C9.65 4.09 5.414 6.369 3.807 7.989 2.433 9.375 1.6 10.27 2.154 12.05c.443 1.424 1.725 1.976 2.289 1.976h15.07c.564 0 1.846-.552 2.29-1.976.553-1.78-.28-2.674-1.654-4.06Z"
      />
    </svg>
  );
};
export default PoliceCap;
