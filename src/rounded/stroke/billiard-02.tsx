import React from "react";
const Billiard_02: React.FC<
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
        d="M12 12c-.828 0-1.5.56-1.5 1.25s.672 1.25 1.5 1.25 1.5-.56 1.5-1.25S12.828 12 12 12Zm0 0c.828 0 1.5-.56 1.5-1.25S12.828 9.5 12 9.5s-1.5.56-1.5 1.25S11.172 12 12 12Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
      />
    </svg>
  );
};
export default Billiard_02;
