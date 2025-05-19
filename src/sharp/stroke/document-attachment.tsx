import React from "react";
const DocumentAttachment: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M11 22H3.5V2h17v8.5M7.5 7h9M7.5 12h6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M20.5 20v-3c0-1.43-1.343-3-3-3s-3 1.57-3 3v3.5a1.5 1.5 0 0 0 3 0V17"
      />
    </svg>
  );
};
export default DocumentAttachment;
