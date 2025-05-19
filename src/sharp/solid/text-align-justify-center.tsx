import React from "react";
const TextAlignJustifyCenter: React.FC<
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
        d="M21 4H3V2h18zM21 10H3V8h18zM21 16H3v-2h18zM21 22H3v-2h18z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextAlignJustifyCenter;
