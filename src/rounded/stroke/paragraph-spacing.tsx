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
        d="M3 2h18M3 22h18M9.473 8.509l1.8-2.135c.37-.441.995-.445 1.4 0l1.78 2.135m-2.48-1.425v4.324l-.001 5.591m2.5-1.424-1.8 2.134c-.37.442-.994.446-1.4 0l-1.78-2.134"
      />
    </svg>
  );
};
export default ParagraphSpacing;
