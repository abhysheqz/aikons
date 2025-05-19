import React from "react";
const ChinaTemple: React.FC<
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
        d="M22 12c-2.4 0-4.333-1.333-5-2H7c-.667.667-2.6 2-5 2 0 2 1.718 2 2.854 2h14.292C20.282 14 22 14 22 12ZM19 4c-2.4 0-4.333-1.333-5-2h-4c-.667.667-2.6 2-5 2 0 2 1.718 2 2.854 2h8.292C17.282 6 19 6 19 4ZM17 10V6M7 10V6M19 22v-8M5 22v-8M3 22h18M10 22v-3a2 2 0 1 1 4 0v3"
      />
    </svg>
  );
};
export default ChinaTemple;
