import React from "react";
const TextBold: React.FC<
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
        d="M4.5 2h8.579c3.01 0 5.421 2.48 5.421 5.5S16.09 13 13.079 13H5.5a1 1 0 0 1-1-1zm2 2v7h6.579c1.873 0 3.421-1.55 3.421-3.5S14.952 4 13.079 4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.5 12a1 1 0 0 1 1-1h8.667c2.98 0 5.333 2.498 5.333 5.5S17.147 22 14.167 22H4.5zm2 1v7h7.667c1.805 0 3.333-1.531 3.333-3.5S15.972 13 14.167 13z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextBold;
