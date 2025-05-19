import React from "react";
const CrownMinus: React.FC<
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
        d="M15.5 2.25h7v2h-7zM16.768 10.644 12 3.25l-4.768 7.394-5.982-3.54L4.42 18.75h15.16l3.17-11.645zM19.5 21.75v-2h-15v2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CrownMinus;
