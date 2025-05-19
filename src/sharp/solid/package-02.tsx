import React from "react";
const Package_02: React.FC<
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
        fillRule="evenodd"
        d="M5.125 1.75h4.243l-1 4H2.125zm3.125 11v-5.5h-6.5v15h20.5v-15h-6.5v5.5zm7.382-7-1-4h4.243l3 4zM11.5 15.5h-7v4h7zm1.586-13.75h-2.172L9.75 6.408v4.842h4.5V6.408z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Package_02;
