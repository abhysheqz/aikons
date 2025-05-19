import React from "react";
const LessThan: React.FC<
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
        d="M17.78 3.375a1 1 0 0 1-.155 1.406L8.6 12l9.024 7.22a1 1 0 1 1-1.25 1.56l-10-8a1 1 0 0 1 0-1.56l10-8a1 1 0 0 1 1.406.155"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LessThan;
