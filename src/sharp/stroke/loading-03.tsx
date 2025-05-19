import React from "react";
const Loading_03: React.FC<
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
        d="M12 2v4M12 18v4M22 12h-4M6 12H2M19.07 4.93l-2.828 2.828M7.758 16.242l-2.829 2.829M19.07 19.07l-2.828-2.828M7.758 7.758 4.93 4.93"
      />
    </svg>
  );
};
export default Loading_03;
