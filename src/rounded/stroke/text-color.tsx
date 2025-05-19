import React from "react";
const TextColor: React.FC<
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
        strokeWidth={1.5}
        d="M3 21h18M19 18l-3.375-8.842C14.057 5.053 13.274 3 12 3S9.943 5.053 8.375 9.158L5 18M8 11h8"
      />
    </svg>
  );
};
export default TextColor;
