import React from "react";
const Litecoin: React.FC<
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
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m11.5 6.5-1.343 4.795m0 0L8.5 16.5h7m-5.343-5.205L7.5 12.333m2.657-1.038L13.9 9.833"
      />
    </svg>
  );
};
export default Litecoin;
