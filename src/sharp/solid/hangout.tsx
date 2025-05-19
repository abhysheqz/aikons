import React from "react";
const Hangout: React.FC<
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
        d="M2.25 11A9.73 9.73 0 0 1 12 1.25 9.73 9.73 0 0 1 21.75 11c0 2.726-1.349 5.64-3.171 7.852C16.777 21.04 14.335 22.75 12 22.75h-.75v-2.028a9.73 9.73 0 0 1-9-9.722m15.25.797V8h-4v4h1.797v2c1.203 0 2.203-1 2.203-2.203M10.5 8v3.797C10.5 13 9.5 14 8.297 14v-2H6.5V8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Hangout;
