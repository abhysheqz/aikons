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
        fill="currentColor"
        fillRule="evenodd"
        d="M2 2h20v2H2zM2 14h8v2H2zM2 20h8v2H2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 8h14.5a5.5 5.5 0 1 1 0 11h-2.086l1.293 1.293-1.414 1.414L10.586 18l3.707-3.707 1.414 1.414L14.414 17H16.5a3.5 3.5 0 1 0 0-7H2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextWrap;
