import React from "react";
const Share_04: React.FC<
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
        d="M12.75 2.25h9v9h-2V5.664l-8.5 8.5-1.414-1.414 8.5-8.5H12.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.5 2.25H2.25v19.5h19.5V12.5H18.5V8.682l-7.25 7.25-3.182-3.182 7.25-7.25H11.5z"
      />
    </svg>
  );
};
export default Share_04;
