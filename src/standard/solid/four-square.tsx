import React from "react";
const FourSquare: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.997 1.75a2.75 2.75 0 0 0-2.75 2.75v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm6.958 5.538a1 1 0 1 0-1.916-.575l-1.481 4.939A1.436 1.436 0 0 0 9.933 13.5h4.564V17a1 1 0 0 0 2 0V7a1 1 0 1 0-2 0v4.5h-3.806z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FourSquare;
