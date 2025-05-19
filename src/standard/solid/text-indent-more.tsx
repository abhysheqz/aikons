import React from "react";
const TextIndentMore: React.FC<
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
        d="M20.5 6a1 1 0 0 0-1-1h-5a1 1 0 1 0 0 2h5a1 1 0 0 0 1-1m-2 4a1 1 0 0 0-1-1h-3a1 1 0 1 0 0 2h3a1 1 0 0 0 1-1m2 4a1 1 0 0 0-1-1h-5a1 1 0 1 0 0 2h5a1 1 0 0 0 1-1m-2 4a1 1 0 0 0-1-1h-3a1 1 0 1 0 0 2h3a1 1 0 0 0 1-1M10.75 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.463 7.807A.75.75 0 0 0 3 8.5v7a.75.75 0 0 0 1.28.53l3.5-3.5a.75.75 0 0 0 0-1.06l-3.5-3.5a.75.75 0 0 0-.817-.163"
      />
    </svg>
  );
};
export default TextIndentMore;
