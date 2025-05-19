import React from "react";
const StudyDesk: React.FC<
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
        d="M15.182 3.56a2 2 0 0 0-2.828 0L12 3.915l2.828 2.829.354-.354a2 2 0 0 0 0-2.828Zm0 0 1.072-.92a1 1 0 0 1 1.399.095l2.412 2.714a2 2 0 0 1 .261 2.286L18 12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 12H2M20 17h-7a1 1 0 0 1-1-1v-4M4 12v10m16-10v10"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7 12V7a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v5M4 12V7a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v5"
      />
    </svg>
  );
};
export default StudyDesk;
