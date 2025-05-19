import React from "react";
const ArrowReloadHorizontal: React.FC<
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
        d="M17.486 10.01 21 6.496 17.485 3M4.986 10.991V6.616c0-.056.046-.12.101-.12h15.425M6.515 13.99l-3.516 3.514L6.515 21m12.499-7.991v4.375c0 .056-.045.12-.1.12H3.475"
      />
    </svg>
  );
};
export default ArrowReloadHorizontal;
