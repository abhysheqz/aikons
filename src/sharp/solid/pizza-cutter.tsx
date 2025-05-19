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
        fill="currentColor"
        fillRule="evenodd"
        d="M21.359 3.641a4.75 4.75 0 1 0-6.718 6.718 4.75 4.75 0 0 0 6.718-6.718m-2.652 2.652a1 1 0 1 0-1.414 1.414l.006.006A1 1 0 0 0 18.714 6.3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.05 8.75a.75.75 0 0 1 .529.25l4.48 5a.75.75 0 0 1-.109 1.1l-.218.164a4.39 4.39 0 0 1-4.055.64l-2.202 2.201c-.05.99-.345 1.96-1.064 2.642-1.409 1.337-3.678 1.337-5.087 0a3.373 3.373 0 0 1-.001-4.935l7.18-6.855a.75.75 0 0 1 .547-.207"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m10.875 9.72 2.5-2 1.25 1.56-2.5 2zm1.985 2.512 3-2.5 1.28 1.536-3 2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PizzaCutter;
