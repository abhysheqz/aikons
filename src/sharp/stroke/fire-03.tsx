import React from "react";
const Fire_03: React.FC<
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
        d="M12 21.5a8 8 0 0 0 8-8c0-2.96-1.609-6.893-4-9.165l-2 2.664-3.5-4.5C7 5 4 9.595 4 13.501a8 8 0 0 0 8 8Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 18.5c2.21 0 4-2.016 4-4.5 0-.792-.181-1.535-.5-2.181l-2 1.68-3-4c-1 1-2.5 2.612-2.5 4.5 0 2.485 1.79 4.5 4 4.5Z"
      />
    </svg>
  );
};
export default Fire_03;
