import React from "react";
const QuoteUpCircle: React.FC<
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
        d="M11.75 1C5.813 1 1 5.813 1 11.75S5.813 22.5 11.75 22.5 22.5 17.687 22.5 11.75 17.687 1 11.75 1M7 10.75A2.25 2.25 0 0 1 9.25 8.5a.75.75 0 0 0 0-1.5 3.75 3.75 0 0 0-3.75 3.75v4c0 .966.784 1.75 1.75 1.75h2A1.75 1.75 0 0 0 11 14.75v-2A1.75 1.75 0 0 0 9.25 11H7zm7 0a2.25 2.25 0 0 1 2.25-2.25.75.75 0 0 0 0-1.5 3.75 3.75 0 0 0-3.75 3.75v4c0 .966.784 1.75 1.75 1.75h2A1.75 1.75 0 0 0 18 14.75v-2A1.75 1.75 0 0 0 16.25 11H14z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default QuoteUpCircle;
