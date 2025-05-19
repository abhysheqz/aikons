import React from "react";
const LookLeft: React.FC<
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75c-4.917 0-9.064-3.302-10.343-7.81l.533.243.047.02c.875.328 1.51.547 2.763.547 1.735 0 3.346-.413 4.416-1.125a.75.75 0 1 0-.83-1.249c-.755.502-2.049.874-3.586.874-.987 0-1.43-.15-2.212-.443l-1.479-.672Q1.25 12.575 1.25 12m5.492-3c0-.69.56-1.25 1.25-1.25h.01a1.25 1.25 0 1 1 0 2.5h-.01c-.69 0-1.25-.56-1.25-1.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LookLeft;
