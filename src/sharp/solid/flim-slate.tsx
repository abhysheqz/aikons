import React from "react";
const FlimSlate: React.FC<
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
        d="M18.556 1.284a.98.98 0 0 1 1.19.646l1.463 4.773a.94.94 0 0 1-.088.749.97.97 0 0 1-.616.453l-16.09 3.818a.98.98 0 0 1-1.154-.626L1.8 6.8a.94.94 0 0 1 .065-.752.97.97 0 0 1 .603-.47zM3.976 7.155l.852 2.506 2.317-.55.535-2.945zm9.154.535-3.86.917.547-3.011L13.7 4.559zm2.125-.504 3.79-.9-.893-2.916-2.316.619z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 10.25a.75.75 0 0 0-.75.75v11c0 .414.336.75.75.75h17.5a.75.75 0 0 0 .75-.75V11a.75.75 0 0 0-.75-.75zM8 19h4v-2H8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FlimSlate;
