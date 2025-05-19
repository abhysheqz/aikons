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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m-4.5 15.5A3.75 3.75 0 0 0 11.25 13V7.25h-5.5v5.5h4V13a2.25 2.25 0 0 1-2.25 2.25zm7 0A3.75 3.75 0 0 0 18.25 13V7.25h-5.5v5.5h4V13a2.25 2.25 0 0 1-2.25 2.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default QuoteDownCircle;
