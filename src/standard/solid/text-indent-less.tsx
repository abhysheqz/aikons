import React from "react";
const TextIndentLess: React.FC<
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
        d="M3 6a1 1 0 0 1 1-1h5a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1m2 4a1 1 0 0 1 1-1h3a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1m-2 4a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m2 4a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1M12.75 2a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M20.037 7.807a.75.75 0 0 1 .463.693v7a.75.75 0 0 1-1.28.53l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 .817-.163"
      />
    </svg>
  );
};
export default TextIndentLess;
