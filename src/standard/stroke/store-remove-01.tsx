import React from "react";
const StoreRemove_01: React.FC<
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
        d="M13 22.25a.75.75 0 0 0 0-1.5zm8.25-11.75a.75.75 0 0 0-1.5 0zm-1.5 2.5a.75.75 0 0 0 1.5 0zm-17-2.5v9h1.5v-9zM5.5 22.25H13v-1.5H5.5zM19.75 10.5V13h1.5v-2.5zm-17 9a2.75 2.75 0 0 0 2.75 2.75v-1.5c-.69 0-1.25-.56-1.25-1.25z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.103 10.26c-1.193 1.306-2.869 1.305-3.838 1.13C3.765 11.12 2.629 9.909 2 9l1.783-5.794a1 1 0 0 1 .956-.706H19.26a1 1 0 0 1 .956.706L22 9c-1.732 2.095-4.889 3.725-7.137 1.272m-5.76-.013c.516-.565.942-1.374 1.182-2.52m-1.182 2.52c.588.666 2.223 1.759 4.248.96 1.935-.762 2.366-2.204 2.649-3.48M6.5 18h4M16.5 16.5l5 5m-5 0 5-5"
      />
    </svg>
  );
};
export default StoreRemove_01;
