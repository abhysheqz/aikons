import React from "react";
const Handcuffs: React.FC<
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
        d="M10.243 3.592A1 1 0 0 0 9 4.562V7.5a1 1 0 1 1-2 0V4.562a3 3 0 0 1 3.728-2.91l4 1A3 3 0 0 1 17 5.562v3.416a1 1 0 1 1-2 0V5.562a1 1 0 0 0-.758-.97z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.5 5.25c-.69 0-1.25.56-1.25 1.25v1.887a6.75 6.75 0 1 0 7.5 0V6.5c0-.69-.56-1.25-1.25-1.25zm2.5 6a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.832 21.309a6.75 6.75 0 1 0 7.92-10.922V8.5c0-.69-.56-1.25-1.25-1.25h-5q-.13 0-.25.025v.361a8.24 8.24 0 0 1 2.967 5.622 2.75 2.75 0 1 1-1.316 5.264 8.3 8.3 0 0 1-3.071 2.787"
      />
    </svg>
  );
};
export default Handcuffs;
