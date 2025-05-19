import React from "react";
const Office_365: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M14.756 1.295a.75.75 0 0 0-.523.004l-10.5 4A.75.75 0 0 0 3.25 6v12c0 .311.192.59.483.7l10.5 4a.75.75 0 0 0 .523.005l5.5-2A.75.75 0 0 0 20.75 20V4a.75.75 0 0 0-.494-.705zM4 18l10 .5V6L8.5 7.5v8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Office_365;
