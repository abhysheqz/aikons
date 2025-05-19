import React from "react";
const TextStrikethrough: React.FC<
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
        d="M3 12a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 4C9.354 4 7.5 5.79 7.5 7.667c0 .414.046.765.13 1.062a1 1 0 0 1-1.926.542A6 6 0 0 1 5.5 7.667C5.5 4.389 8.57 2 12 2s6.5 2.39 6.5 5.667a1 1 0 1 1-2 0C16.5 5.789 14.646 4 12 4m1.945 7.73a1 1 0 0 1 1.233-.693c1.188.333 2.18.923 2.859 1.863.675.932.963 2.098.963 3.433 0 1.98-.82 3.46-2.189 4.407C15.496 21.648 13.768 22 12 22c-3.618 0-7-2.318-7-5.667a1 1 0 1 1 2 0C7 18.14 8.99 20 12 20c1.546 0 2.818-.315 3.674-.906.803-.555 1.326-1.407 1.326-2.76 0-1.058-.227-1.77-.583-2.261-.35-.485-.906-.865-1.78-1.11a1 1 0 0 1-.692-1.233"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextStrikethrough;
