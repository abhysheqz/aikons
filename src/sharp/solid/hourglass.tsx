import React from "react";
const Hourglass: React.FC<
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
        d="M6.188 2.25v2.925c0 3.23 2.602 5.85 5.812 5.85s5.813-2.62 5.813-5.85V2.25h1.937v2.925A7.8 7.8 0 0 1 15.755 12a7.8 7.8 0 0 1 3.995 6.825v2.925H4.25v-2.925A7.8 7.8 0 0 1 8.245 12 7.8 7.8 0 0 1 4.25 5.175V2.25z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 1h18v2H3zm0 20h18v2H3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Hourglass;
