import React from "react";
const Analytics_03: React.FC<
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
        d="M5 8v13H3V8zM9 3v18H7V3zM13 10v11h-2V10zM17 6v15h-2V6zM21 13v8h-2v-8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Analytics_03;
