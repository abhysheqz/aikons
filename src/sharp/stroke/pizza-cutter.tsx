import React from "react";
const PizzaCutter: React.FC<
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
        strokeWidth={2}
        d="m18.005 6.999-.007-.007"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20.827 9.816a4.01 4.01 0 0 1-5.662 0 3.985 3.985 0 0 1 0-5.647 4.01 4.01 0 0 1 5.662 0 3.985 3.985 0 0 1 0 5.647ZM13.993 8.49l-2.503 1.996m5.005 0-3.003 2.496M3.182 16l6.764-6.442a.1.1 0 0 1 .144.006l4.337 4.833c.036.04.034.1-.005.137-1.254 1.154-3.22.865-3.961.471l-2.743 2.753c0 .641-.172 1.336-.259 1.603-.468.926-2.147 2.395-4.133 1.187-1.449-.88-1.475-2.244-1.168-3.173.181-.55.604-.974 1.024-1.374Z"
      />
    </svg>
  );
};
export default PizzaCutter;
