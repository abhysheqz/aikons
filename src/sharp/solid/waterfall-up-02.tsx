import React from "react";
const WaterfallUp_02: React.FC<
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
        d="M22 21.5H2v-2h20zM5 14.5v3H3v-3zM9 8.5v5H7v-5zM13 8.5v2h-2v-2zM17 4.5v6h-2v-6zM21 2.5v2h-2v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WaterfallUp_02;
