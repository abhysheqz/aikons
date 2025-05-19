import React from "react";
const Octagon: React.FC<
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
        d="M7.177 1.763a1.75 1.75 0 0 1 1.237-.513h7.172c.464 0 .909.184 1.237.513l5.414 5.414c.329.328.513.773.513 1.237v7.172c0 .464-.184.909-.513 1.237l-5.414 5.414a1.75 1.75 0 0 1-1.237.513H8.414a1.75 1.75 0 0 1-1.237-.513l-5.414-5.414a1.75 1.75 0 0 1-.513-1.237V8.414c0-.464.184-.909.513-1.237z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Octagon;
