import React from "react";
const Store_02: React.FC<
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
        d="M2.25 21.275V9.55H4.2V20.3h15.6V9.55h1.95v11.725a.975.975 0 0 1-.975.975H3.225a.975.975 0 0 1-.975-.975"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M22.715 8.78a.75.75 0 0 1-.109.66c-.872 1.207-2.286 2.81-4.853 2.81a4.78 4.78 0 0 1-2.878-.958c-.8.602-1.797.958-2.877.958a4.78 4.78 0 0 1-2.877-.957c-.801.601-1.798.957-2.877.957-2.567 0-3.98-1.604-4.852-2.81a.75.75 0 0 1-.109-.66l2.163-7.03h17.108z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 18H6v-2h5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Store_02;
