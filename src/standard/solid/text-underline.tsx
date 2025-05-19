import React from "react";
const TextUnderline: React.FC<
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
        d="M5.5 2a1 1 0 0 1 1 1v7.5a5.5 5.5 0 1 0 11 0V3a1 1 0 1 1 2 0v7.5a7.5 7.5 0 0 1-15 0V3a1 1 0 0 1 1-1M2 21a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextUnderline;
