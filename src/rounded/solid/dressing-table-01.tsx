import React from "react";
const DressingTable_01: React.FC<
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
        d="M12 3a5 5 0 0 0-5 5v6a1 1 0 1 1-2 0V8a7 7 0 0 1 14 0v6a1 1 0 1 1-2 0V8a5 5 0 0 0-5-5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.53 4.47a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 1 1-1.06-1.06l1-1a.75.75 0 0 1 1.06 0m2 1a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0M6 19.75V22a1 1 0 1 1-2 0v-7a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2v7a1 1 0 1 1-2 0v-2.25zm5.5-4a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DressingTable_01;
