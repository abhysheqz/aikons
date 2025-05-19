import React from "react";
const Archive_01: React.FC<
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
      <path fill="currentColor" d="M9.5 2.5V6h-8V2.5z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.5 21.5v-14h-8v14zm-2.991-5h-2.01v2h2.01z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="m18 2.5-7.5 2 .922 3.485 7.511-1.96z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15 21.5 11.806 9.435l7.51-1.96L22.5 19.5zm3.716-5.727-1.94.52.517 1.932 1.94-.52z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Archive_01;
