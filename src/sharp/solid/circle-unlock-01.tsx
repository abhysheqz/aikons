import React from "react";
const CircleUnlock_01: React.FC<
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
        d="M6.5 6.75a5.5 5.5 0 0 1 10.073-3.056l-1.662 1.112A3.5 3.5 0 0 0 8.5 6.75v3h-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 7.25a7.75 7.75 0 1 0 0 15.5 7.75 7.75 0 0 0 0-15.5m1.5 6.25h-3v3h3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleUnlock_01;
