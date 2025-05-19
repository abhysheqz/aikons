import React from "react";
const WhatsappBusiness: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.379.28 2.693.784 3.888.279.66.418.99.436 1.24.017.25-.057.524-.204 1.073L2 22l3.799-1.016c.549-.147.823-.22 1.073-.204.25.018.58.157 1.24.436A10 10 0 0 0 12 22Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.882 12C14.052 12 15 13.007 15 14.25s-.948 2.25-2.118 2.25h-2.47c-.666 0-.998 0-1.205-.203S9 15.768 9 15.115V12m3.882 0C14.052 12 15 10.993 15 9.75s-.948-2.25-2.118-2.25h-2.47c-.666 0-.998 0-1.205.203S9 8.232 9 8.885V12m3.882 0H9"
      />
    </svg>
  );
};
export default WhatsappBusiness;
