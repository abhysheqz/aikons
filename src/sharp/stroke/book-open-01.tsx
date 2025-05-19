import React from "react";
const BookOpen_01: React.FC<
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
        d="M12 6.38 2.012 3.5c-.006-.001-.013.003-.013.01v14.153L12.05 20.5l9.953-2.853V3.56q-.001-.01-.013-.009zm0 0 .048 13.667"
      />
    </svg>
  );
};
export default BookOpen_01;
