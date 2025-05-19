import React from "react";
const Mouse_22: React.FC<
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
        d="M12 22c6 0 7.5-4.51 7.5-10S18 2 12 2 4.5 6.51 4.5 12 6 22 12 22Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.5 7.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C11.301 6 11.534 6 12 6s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v2c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C12.699 11 12.466 11 12 11s-.699 0-.883-.076a1 1 0 0 1-.54-.541c-.077-.184-.077-.417-.077-.883z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 6V2"
      />
    </svg>
  );
};
export default Mouse_22;
