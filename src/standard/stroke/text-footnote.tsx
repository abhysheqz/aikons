import React from "react";
const TextFootnote: React.FC<
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
        d="M11.5 21h-5M9 3v18M2 5.5V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m20 8.4 2-1.2m-2 1.2-2-1.2m2 1.2L18.4 10M20 8.4l1.6 1.6M20 8.4V6"
      />
    </svg>
  );
};
export default TextFootnote;
