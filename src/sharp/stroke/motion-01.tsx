import React from "react";
const Motion_01: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="M22 12v10H12V12z" />
      <path stroke="currentColor" strokeWidth={1.5} d="M17 9V7H7v10h2" />
      <path stroke="currentColor" strokeWidth={1.5} d="M12 4V2H2v10h2" />
    </svg>
  );
};
export default Motion_01;
