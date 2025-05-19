import React from "react";
const Mouse_12: React.FC<
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
        d="M12 22c5.6 0 7-3.834 7-8.5S17.6 5 12 5s-7 3.833-7 8.5S6.4 22 12 22ZM12 8V2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.5 8h-3v4h3z"
      />
    </svg>
  );
};
export default Mouse_12;
