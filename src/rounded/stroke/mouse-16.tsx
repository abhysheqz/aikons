import React from "react";
const Mouse_16: React.FC<
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
        d="M12 22c5.2 0 6.5-3.608 6.5-8S17.2 6 12 6s-6.5 3.608-6.5 8 1.3 8 6.5 8Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 2c0 1.802 1.744 1.5 3.007 1.5 2.04 0 2.927.377 2.993 2.5v3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.5 10.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C11.301 9 11.534 9 12 9s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v1c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C12.699 13 12.466 13 12 13s-.699 0-.883-.076a1 1 0 0 1-.54-.541c-.077-.184-.077-.417-.077-.883z"
      />
    </svg>
  );
};
export default Mouse_16;
