import React from "react";
const RotateSquare: React.FC<
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
        d="M10.112 2.885a3.023 3.023 0 0 1 4.276 0l7.227 7.227a3.023 3.023 0 0 1 0 4.276l-7.227 7.227a3.023 3.023 0 0 1-4.276 0l-7.227-7.227a3.023 3.023 0 0 1 0-4.276l1.39-1.389H3.18a1.008 1.008 0 1 1 0-2.015h3.527a1.008 1.008 0 0 1 .712 1.72l-3.11 3.11a1.01 1.01 0 0 0 0 1.425l7.227 7.226a1.01 1.01 0 0 0 1.426 0l7.226-7.226a1.01 1.01 0 0 0 0-1.426l-7.226-7.226a1.01 1.01 0 0 0-1.426 0l-1.094 1.094A1.008 1.008 0 0 1 9.018 3.98z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RotateSquare;
