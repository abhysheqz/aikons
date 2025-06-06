import React from "react";
const Store_01: React.FC<
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
        d="M3.5 10.5v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.997 17c-.684.607-1.772 1-2.998 1S9.684 17.607 9 17M9.103 10.26c-1.193 1.306-2.869 1.305-3.838 1.13C3.765 11.12 2.629 9.909 2 9l1.783-5.794a1 1 0 0 1 .956-.706H19.26a1 1 0 0 1 .956.706L22 9c-1.732 2.095-4.889 3.725-7.137 1.272m-5.76-.013c.516-.565.942-1.374 1.182-2.52m-1.182 2.52c.588.666 2.223 1.759 4.248.96 1.935-.762 2.366-2.204 2.649-3.48"
      />
    </svg>
  );
};
export default Store_01;
