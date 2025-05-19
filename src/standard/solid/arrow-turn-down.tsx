import React from "react";
const ArrowTurnDown: React.FC<
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
        d="M8.07 5.932C7.388 6.514 7 7.255 7 8v5a1 1 0 1 1-2 0V8c0-1.464.757-2.723 1.773-3.59C7.786 3.547 9.137 3 10.5 3s2.714.546 3.727 1.41C15.243 5.278 16 6.537 16 8v8h2a1 1 0 0 1 .707 1.707l-3 3a1 1 0 0 1-1.414 0l-3-3A1 1 0 0 1 12 16h2V8c0-.745-.388-1.486-1.07-2.068C12.246 5.35 11.346 5 10.5 5s-1.746.35-2.43.932"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowTurnDown;
