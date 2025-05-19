import React from "react";
const SoilMoistureGlobal: React.FC<
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
        d="M19.114 15.357a.75.75 0 0 1 .772 0l.002.001.003.002.008.005.027.017.093.06a8.263 8.263 0 0 1 1.261 1.029c.667.666 1.47 1.726 1.47 3.032 0 1.582-1.222 3.247-3.25 3.247s-3.25-1.665-3.25-3.247c0-1.306.803-2.366 1.47-3.033a8.3 8.3 0 0 1 1.354-1.088l.027-.017.008-.005.003-.002z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 13c-3.603 0-6.714 2.209-8.08 5.394a1 1 0 1 1-1.839-.788C13.745 13.727 17.552 11 22.001 11a1 1 0 0 1 0 2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 9c-5.71 0-10.998 3.934-12.539 9.277a1 1 0 1 1-1.922-.554C9.333 11.5 15.424 7 22 7a1 1 0 0 1 0 2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 5C13.913 5 7.193 10.647 5.474 18.221a1 1 0 1 1-1.95-.442C5.444 9.32 12.952 3 21.999 3a1 1 0 0 1 0 2M4.053 11.394C3.28 11.008 2.49 11 2 11a1 1 0 1 1 0-2h.02c.52 0 1.715 0 2.927.606a1 1 0 1 1-.894 1.788M1 6a1 1 0 0 1 1-1c2.008 0 3.641.367 5.377 1.074a1 1 0 1 1-.754 1.852C5.103 7.307 3.724 7 2 7a1 1 0 0 1-1-1M1 2a1 1 0 0 1 1-1c3.395 0 6.396 1.071 9.015 2.643a1 1 0 0 1-1.03 1.714C7.605 3.93 4.956 3 2 3a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SoilMoistureGlobal;
