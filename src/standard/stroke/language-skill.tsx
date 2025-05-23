import React from "react";
const LanguageSkill: React.FC<
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
        d="M11 15H2.512m0 0A9 9 0 0 0 11 21c-1.6 0-2.909-3.762-2.995-8.5M2.512 15a9 9 0 0 1-.498-2.5M13.016 8h8.487m0 0a9 9 0 0 0-8.487-6c1.6 0 2.909 3.762 2.995 8.5M21.503 8c.28.789.451 1.628.499 2.5M21 14h-6a1 1 0 0 0-1 1v7l2.262-1.358a1 1 0 0 1 .515-.142H21a1 1 0 0 0 1-1V15a1 1 0 0 0-1-1M2 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v7L7.738 8.643a1 1 0 0 0-.515-.143H3a1 1 0 0 1-1-1z"
      />
    </svg>
  );
};
export default LanguageSkill;
