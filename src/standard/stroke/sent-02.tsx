import React from "react";
const Sent_02: React.FC<
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
        d="m9 14 7-6M20.951 2.793 18.637 16.68a.98.98 0 0 1-1.296.764L2.5 12.177a.75.75 0 0 1-.078-1.383L20.131 2.18a.576.576 0 0 1 .82.612"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 14v6.361c0 .353.286.639.638.639v0a.64.64 0 0 0 .548-.31L13 16"
      />
    </svg>
  );
};
export default Sent_02;
