import React from "react";
const TextWrap: React.FC<
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
        d="M3 3h18M3 15h6M3 21h6M3 9h13.5a4.5 4.5 0 1 1 0 9H12m0 0c0-.84 2.393-2.41 3-3m-3 3c0 .84 2.393 2.41 3 3"
      />
    </svg>
  );
};
export default TextWrap;
