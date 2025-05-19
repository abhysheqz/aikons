import React from "react";
const LetterSpacing: React.FC<
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
        d="M3 2v20H1V2zM23 2v20h-2V2zM10.808 5h2.386l4.743 12.649-1.873.702L14.433 14H9.569l-1.632 4.351-1.873-.702zm-.49 7h3.365L12 7.515z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LetterSpacing;
