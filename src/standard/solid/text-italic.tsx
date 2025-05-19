import React from "react";
const TextItalic: React.FC<
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
        d="M14.977 3H11a1 1 0 1 0 0 2h2.557l-5.25 14H6a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2h-2.557l5.25-14H18a1 1 0 1 0 0-2h-3.023"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextItalic;
