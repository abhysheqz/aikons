import React from "react";
const Temperature: React.FC<
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
        d="M12 22a5 5 0 0 0 3-9V5c0-.932 0-1.398-.152-1.766a2 2 0 0 0-1.082-1.082C13.4 2 12.932 2 12 2s-1.399 0-1.766.152a2 2 0 0 0-1.082 1.082C9 3.602 9 4.068 9 5v8a5 5 0 0 0 3 9Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 0V8"
      />
    </svg>
  );
};
export default Temperature;
