import React from "react";
const TradeMark: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m1.155 7.595a.75.75 0 0 0-1.28.53v6h1.5v-4.19l1.75 1.75 1.75-1.75v4.19h1.5v-6a.75.75 0 0 0-1.28-.53l-1.97 1.97zm-7.53 1.28h1.75v5.25h1.5v-5.25h1.75v-1.5h-5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TradeMark;
