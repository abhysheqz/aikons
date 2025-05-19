import React from "react";
const HorizonalScrollPoint: React.FC<
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
      <path fill="currentColor" d="m12 8.5 3.5 3.5-3.5 3.5L8.5 12z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m6 7 1.414 1.414L3.828 12l3.586 3.586L6 17l-5-5zM18 7l-1.414 1.414L20.172 12l-3.586 3.586L18 17l5-5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HorizonalScrollPoint;
