import React from "react";
const StrokeCenter: React.FC<
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
        d="M5.25 1h-2.5A1.75 1.75 0 0 0 1 2.75v18c0 .966.784 1.75 1.75 1.75h18a1.75 1.75 0 0 0 1.75-1.75v-2.5h-8.75a1 1 0 1 1 0-2h8.75v-2.5A1.75 1.75 0 0 0 20.75 12h-9a.25.25 0 0 1-.25-.25v-9A1.75 1.75 0 0 0 9.75 1h-2.5v8.75a1 1 0 1 1-2 0zm4.5 15.25a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StrokeCenter;
