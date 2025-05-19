import React from "react";
const Add_02: React.FC<
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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13.89 2.999h-3.78a.1.1 0 0 0-.1.1v6.91H3.099a.1.1 0 0 0-.1.1v3.781a.1.1 0 0 0 .1.1h6.91v6.911a.1.1 0 0 0 .1.1h3.781a.1.1 0 0 0 .1-.1v-6.91h6.911a.1.1 0 0 0 .1-.1V10.11a.1.1 0 0 0-.1-.1h-6.91V3.099a.1.1 0 0 0-.1-.1Z"
      />
    </svg>
  );
};
export default Add_02;
