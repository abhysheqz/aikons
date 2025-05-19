import React from "react";
const ZoomSquare: React.FC<
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
        d="M6.493 12.984v-3.97h4.496c1.104 0 1.999.888 1.999 1.985v3.97H8.492a1.99 1.99 0 0 1-1.999-1.985ZM17.51 9.514l-2.507 1.48v2.02l2.507 1.499q.008.003.009-.004V9.518q-.002-.007-.009-.004Z"
      />
    </svg>
  );
};
export default ZoomSquare;
