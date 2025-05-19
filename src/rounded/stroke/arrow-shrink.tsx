import React from "react";
const ArrowShrink: React.FC<
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
        d="M14.23 17.995c-.01-.75-.526-3.234 0-3.76.527-.527 3.01-.01 3.76 0M21 20.999l-6.385-6.383M9.77 17.994c.01-.75.525-3.233-.001-3.76-.527-.526-3.01-.01-3.76.001M3 20.998l6.386-6.384M6.007 9.761c.75.01 3.234.522 3.76-.005s.006-3.01-.006-3.76m-.384 3.371L3.002 3.002M17.992 9.761c-.75.01-3.234.522-3.76-.005s-.006-3.01.006-3.76m.384 3.371 6.375-6.365"
      />
    </svg>
  );
};
export default ArrowShrink;
