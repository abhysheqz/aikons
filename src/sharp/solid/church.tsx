import React from "react";
const Church: React.FC<
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
        d="M9.25 15.75A.75.75 0 0 1 10 15h4a.75.75 0 0 1 .75.75v6.75h3V8.325L12 4.875l-5.75 3.45V22.5h3zm1.5 6.75h2.5v-6h-2.5zm.249-10.75h2.009v-2h-2.01z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19 11.912V22.5h2.75v-9.213zM5 22.5V11.911l-2.75 1.375V22.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.25 2.75V1.5h1.5v1.25H14v1.5h-1.25V5.5h-1.5V4.25H10v-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Church;
