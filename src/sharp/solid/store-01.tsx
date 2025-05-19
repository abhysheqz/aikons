import React from "react";
const Store_01: React.FC<
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
        d="M2.25 21.275V9.55H4.2V20.3h15.6V9.55h1.95v11.725a.975.975 0 0 1-.974.975H3.226a.975.975 0 0 1-.975-.975"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.663 16.252c.466.413 1.303.748 2.337.748 1.033 0 1.87-.335 2.336-.748l1.328 1.496C14.76 18.548 13.419 19 12 19s-2.762-.451-3.664-1.252z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M22.716 8.78a.75.75 0 0 1-.109.66c-.872 1.207-2.287 2.81-4.853 2.81a4.78 4.78 0 0 1-2.878-.958c-.8.602-1.797.958-2.877.958a4.78 4.78 0 0 1-2.877-.957c-.801.601-1.798.957-2.878.957-2.566 0-3.98-1.604-4.851-2.81a.75.75 0 0 1-.109-.66l2.163-7.03h17.108z"
      />
    </svg>
  );
};
export default Store_01;
