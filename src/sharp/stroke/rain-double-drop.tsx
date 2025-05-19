import React from "react";
const RainDoubleDrop: React.FC<
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
        d="M15 13.2c0 3.756-2.91 6.8-6.5 6.8S2 16.956 2 13.2C2 8 8.5 4 8.5 4S15 8 15 13.2Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14 5.08C14.869 4.388 15.5 4 15.5 4S22 8 22 13.2c0 3.756-2.91 6.8-6.5 6.8q-.252 0-.5-.02"
      />
    </svg>
  );
};
export default RainDoubleDrop;
