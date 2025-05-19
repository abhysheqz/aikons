import React from "react";
const QuoteUp: React.FC<
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
        d="M3.25 10.25a5 5 0 0 1 5-5v-2a7 7 0 0 0-7 7v10.5h9.5v-9.5h-7.5zM15.25 10.25a5 5 0 0 1 5-5v-2a7 7 0 0 0-7 7v10.5h9.5v-9.5h-7.5z"
      />
    </svg>
  );
};
export default QuoteUp;
