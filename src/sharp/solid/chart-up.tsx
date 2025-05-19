import React from "react";
const ChartUp: React.FC<
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
        d="M20.5 1.25h-5v2h1.608a24 24 0 0 1-2.01 1.63C12.864 6.509 9.331 8.585 4.182 10.3l-.949.316.633 1.898.949-.316c5.35-1.784 9.067-3.958 11.46-5.704A26 26 0 0 0 18.5 4.688V6.25h2zm.75 7h-4.5v13.5h4.5zm-11.5 3.5h4.5v10h-4.5zm-2.5 2.5h-4.5v7.5h4.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ChartUp;
