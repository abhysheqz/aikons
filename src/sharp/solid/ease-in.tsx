import React from "react";
const EaseIn: React.FC<
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
        d="M21.25 4.375s-.467 1.341-.89 2.108a43 43 0 0 1-3.697 5.633C13.499 16.166 8.739 20.5 2.75 20.5v-2c5.01 0 9.251-3.666 12.337-7.616a41 41 0 0 0 3.522-5.367c.405-.733.843-2.017.843-2.017z"
      />
    </svg>
  );
};
export default EaseIn;
