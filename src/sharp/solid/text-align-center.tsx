import React from "react";
const TextAlignCenter: React.FC<
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
        d="M21 4H3V2h18zM16 10H8V8h8zM21 16H3v-2h18zM16 22H8v-2h8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextAlignCenter;
