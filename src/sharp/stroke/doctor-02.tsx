import React from "react";
const Doctor_02: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M20 22v-4s-1-2-3-2h-2l-3 4-3-4H7c-2 0-3 2-3 2v4M15.938 8 17 2.5V2H7v.5L8.063 8m7.875 0v2c0 2.209-1.763 4-3.938 4-2.174 0-3.937-1.791-3.937-4V8m7.875 0H8.063M12 4v2m1-1h-2"
      />
    </svg>
  );
};
export default Doctor_02;
