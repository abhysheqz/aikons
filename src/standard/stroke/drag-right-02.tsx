import React from "react";
const DragRight_02: React.FC<
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
        d="M6.539 12.664 8.494 14.5V7.006a1.506 1.506 0 0 1 3.013-.003L11.516 12h3.983A2.5 2.5 0 0 1 18 14.507l-.012 4.5a2.5 2.5 0 0 1-2.502 2.493H9.595c-.686 0-1.324-.35-1.69-.93l-3.56-5.617a1.74 1.74 0 0 1-.008-2.068c.543-.727 1.541-.828 2.202-.221"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.196 9a3.5 3.5 0 1 1 3.608 0M17.5 3.43 20 6l-2.5 2.43M13.5 6H19"
      />
    </svg>
  );
};
export default DragRight_02;
