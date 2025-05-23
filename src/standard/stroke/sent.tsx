import React from "react";
const Sent: React.FC<
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
        d="M11.5 12.5 15 9M2.747 8.406c-1.06.379-.969 1.907.129 2.157L11.5 12.5l1.937 8.624c.25 1.098 1.778 1.19 2.157.13l6.338-17.748c.32-.894-.544-1.757-1.438-1.438z"
      />
    </svg>
  );
};
export default Sent;
