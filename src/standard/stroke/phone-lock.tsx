import React from "react";
const PhoneLock: React.FC<
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
        d="M12.5 2h-4L9 3h3zM15.5 11v-1a1.5 1.5 0 0 1 3 0v1m-4 .5h5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 6V3.5A1.5 1.5 0 0 0 15.5 2h-10A1.5 1.5 0 0 0 4 3.5v17A1.5 1.5 0 0 0 5.5 22h10a1.5 1.5 0 0 0 1.5-1.5V18"
      />
    </svg>
  );
};
export default PhoneLock;
