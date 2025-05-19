import React from "react";
const Trello: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 3v18H3V3z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.503 6.013H5.966V17.03q.001.009.01.01h4.517a.01.01 0 0 0 .01-.01zM18.022 6.013h-4.538v5.99q.001.01.01.01h4.518a.01.01 0 0 0 .01-.01z"
      />
    </svg>
  );
};
export default Trello;
