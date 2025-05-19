import React from "react";
const HandBag_01: React.FC<
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
        d="M7.41 8.25c.221-1.78.655-3.231 1.223-4.341C9.45 2.31 10.648 1.25 12 1.25s2.55 1.06 3.367 2.659c.568 1.11 1.002 2.56 1.222 4.341h3.161v6h-5v-.75a.75.75 0 0 0-.75-.75h-4a.75.75 0 0 0-.75.75v.75h-5v-6zm1.513 0c.209-1.55.59-2.767 1.045-3.659C10.685 3.19 11.487 2.75 12 2.75s1.315.44 2.032 1.841c.456.892.836 2.108 1.045 3.659z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19.994 15.75H14.75v.75a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-.75H4.006l-1.727 6.044A.75.75 0 0 0 3 22.75h18a.75.75 0 0 0 .721-.956zM10.75 15.75h2.5v-1.5h-2.5z"
      />
    </svg>
  );
};
export default HandBag_01;
