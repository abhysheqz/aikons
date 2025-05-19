import React from "react";
const StoreLocation_01: React.FC<
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
        d="M18.5 13.5c1.933 0 3.5 1.538 3.5 3.434C22 19.08 20 20.5 18.5 22 17 20.5 15 19.035 15 16.934c0-1.896 1.567-3.434 3.5-3.434Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.5 17h.009"
      />
      <path
        fill="currentColor"
        d="M13 21.75a.75.75 0 0 0 0-1.5zM2.75 10v9h1.5v-9zM5.5 21.75H13v-1.5H5.5zM2.75 19a2.75 2.75 0 0 0 2.75 2.75v-1.5c-.69 0-1.25-.56-1.25-1.25z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.103 9.76c-1.193 1.306-2.869 1.305-3.838 1.13C3.765 10.62 2.629 9.409 2 8.5l1.783-5.794A1 1 0 0 1 4.739 2H19.26a1 1 0 0 1 .956.706L22 8.5c-1.732 2.095-4.889 3.725-7.137 1.272m-5.76-.013c.516-.565.942-1.374 1.182-2.52M9.103 9.76c.588.666 2.223 1.759 4.248.96 1.935-.762 2.366-2.204 2.649-3.48M6.5 17.5h4"
      />
    </svg>
  );
};
export default StoreLocation_01;
