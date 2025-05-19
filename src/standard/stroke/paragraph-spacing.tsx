import React from "react";
const ParagraphSpacing: React.FC<
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
        d="M3 2h18M3 22h18M9.5 8.5 12 6l2.5 2.5m-5 7L12 18l2.5-2.5m-2.5-9v11"
      />
    </svg>
  );
};
export default ParagraphSpacing;
