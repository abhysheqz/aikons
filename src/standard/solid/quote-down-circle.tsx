import React from "react";
const QuoteDownCircle: React.FC<
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
        d="M11.75 1C5.813 1 1 5.813 1 11.75S5.813 22.5 11.75 22.5 22.5 17.687 22.5 11.75 17.687 1 11.75 1M9.5 12.5v.25A2.25 2.25 0 0 1 7.25 15a.75.75 0 0 0 0 1.5A3.75 3.75 0 0 0 11 12.75v-4A1.75 1.75 0 0 0 9.25 7h-2A1.75 1.75 0 0 0 5.5 8.75v2c0 .966.784 1.75 1.75 1.75zm7 0v.25A2.25 2.25 0 0 1 14.25 15a.75.75 0 0 0 0 1.5A3.75 3.75 0 0 0 18 12.75v-4A1.75 1.75 0 0 0 16.25 7h-2a1.75 1.75 0 0 0-1.75 1.75v2c0 .966.784 1.75 1.75 1.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default QuoteDownCircle;
