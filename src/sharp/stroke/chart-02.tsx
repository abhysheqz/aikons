import React from "react";
const Chart_02: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M3.5 21h3V11h-3zM10.5 21h3v-8h-3zM17.5 21h3V9h-3zM6.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM20.5 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13.5 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM6.443 6.912l4.115 1.176m2.745-.333 4.395-2.51"
      />
    </svg>
  );
};
export default Chart_02;
