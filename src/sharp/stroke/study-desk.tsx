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
        d="M22 12H2M20 17h-8v-5M4 12v10m16-10v10M15.182 3.56a2 2 0 0 0-2.828 0L12 3.915l2.828 2.829.354-.354a2 2 0 0 0 0-2.828Zm0 0L17 2l4 4.5-3 5.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7 12V6h3v6M4 12V6h3v6"
      />
    </svg>
  );
};
export default StudyDesk;
