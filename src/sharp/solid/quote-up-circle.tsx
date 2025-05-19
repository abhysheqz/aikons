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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M7.25 11A2.25 2.25 0 0 1 9.5 8.75v-1.5A3.75 3.75 0 0 0 5.75 11v5.75h5.5v-5.5h-4zm7 0a2.25 2.25 0 0 1 2.25-2.25v-1.5A3.75 3.75 0 0 0 12.75 11v5.75h5.5v-5.5h-4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default QuoteUpCircle;
