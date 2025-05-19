import React from "react";
const WaterfallDown_03: React.FC<
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
        d="M22 21.5H2v-2h20zM21 15.5v2h-2v-2zM17 9.5v5h-2v-5zM13 9.5v3h-2v-3zM9 2.5v7H7v-7zM5 7.5v2H3v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WaterfallDown_03;
