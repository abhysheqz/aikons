import React from "react";
const Share_06: React.FC<
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
        d="M14.956 5.862a8.5 8.5 0 1 0 3.182 3.182l-6.888 6.888-3.182-3.182z"
      />
    </svg>
  );
};
export default Share_06;
