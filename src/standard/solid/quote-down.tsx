import React from "react";
const QuoteDown: React.FC<
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
        d="M8.5 13.5a5 5 0 0 1-5 5 1 1 0 1 0 0 2 7 7 0 0 0 7-7V5.75A2.75 2.75 0 0 0 7.75 3h-4A2.75 2.75 0 0 0 1 5.75v4a2.75 2.75 0 0 0 2.75 2.75h4q.392-.001.75-.104zM20.5 13.5a5 5 0 0 1-5 5 1 1 0 1 0 0 2 7 7 0 0 0 7-7V5.75A2.75 2.75 0 0 0 19.75 3h-4A2.75 2.75 0 0 0 13 5.75v4a2.75 2.75 0 0 0 2.75 2.75h4q.392-.001.75-.104z"
      />
    </svg>
  );
};
export default QuoteDown;
