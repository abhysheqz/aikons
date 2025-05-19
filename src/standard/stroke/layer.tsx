import React from "react";
const Layer: React.FC<
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
        d="M11.202 4.172c.509-.23 1.087-.23 1.596 0l8.6 3.877c.803.361.803 1.54 0 1.902l-8.6 3.877c-.509.23-1.087.23-1.596 0l-8.6-3.877c-.803-.361-.803-1.54 0-1.902z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m20.181 13.5 1.217.549c.803.361.803 1.54 0 1.902l-8.6 3.877c-.509.23-1.087.23-1.596 0l-8.6-3.876c-.803-.362-.803-1.542 0-1.903l1.217-.549"
      />
    </svg>
  );
};
export default Layer;
