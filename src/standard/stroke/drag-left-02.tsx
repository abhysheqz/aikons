import React from "react";
const DragLeft_02: React.FC<
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
        d="m9.539 12.664 1.955 1.836V7.006a1.506 1.506 0 0 1 3.013-.003L14.516 12h3.983A2.5 2.5 0 0 1 21 14.507l-.012 4.5a2.5 2.5 0 0 1-2.502 2.493h-5.891c-.686 0-1.324-.35-1.69-.93l-3.56-5.617a1.74 1.74 0 0 1-.008-2.068c.543-.727 1.541-.828 2.202-.221"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.804 9a3.5 3.5 0 1 0-3.608 0M5.5 3.5 3 6l2.5 2.5m4-2.5H4"
      />
    </svg>
  );
};
export default DragLeft_02;
