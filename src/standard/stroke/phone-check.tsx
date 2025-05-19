import React from "react";
const PhoneCheck: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.5 2h-4L9 3h3z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 17v3.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 4 20.5v-17A1.5 1.5 0 0 1 5.5 2h10A1.5 1.5 0 0 1 17 3.5V7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12 12.5 2.5 2.5L20 9"
      />
    </svg>
  );
};
export default PhoneCheck;
