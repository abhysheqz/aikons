import React from "react";
const Nike: React.FC<
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
        d="M7.503 16.267C-.781 19.742 1.808 9.896 5.433 7c-.978 2.667-1.453 7.008 5.067 4.5L22 7s-5.279 5.4-14.497 9.267"
      />
    </svg>
  );
};
export default Nike;
