import React from "react";
const MoneyRemove_02: React.FC<
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
        d="m22.75 15.337-2 2 2 2-1.414 1.414-2-2-2 2-1.414-1.414 2-2-2-2 1.414-1.414 2 2 2-2z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.181 3.482c3.925.981 6.079.97 7.844.735 1.73-.23 3.418-.757 5.975-.757 2.063 0 3.624.258 4.682.522 1.2.3 2.068.764 2.068.764v8.823l-1.414-1.414-2 2-2-2-3.182 3.182 2 2-.453.452c-2.254.037-3.54.481-5.477.74-1.984.264-4.33.253-8.406-.766l-.568-.142V3.25zm.569 12.962c1.228.29 2.274.478 3.186.59a4.005 4.005 0 0 0-3.186-3.219zm9.249-8.195a3 3 0 1 0 .001 6 3 3 0 0 0-.001-6m6.518-3.14c.161 1.608 1.374 3.08 2.733 3.494V5.718a10 10 0 0 0-.932-.28 15 15 0 0 0-1.8-.33M2.75 8.171c1.367-.284 2.536-1.308 2.995-2.477a30 30 0 0 1-2.995-.537z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoneyRemove_02;
