import React from "react";
const SevenCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M9 6a1 1 0 0 0 0 2h4.704l-3.626 8.612a1 1 0 1 0 1.844.776l3.967-9.423A1.415 1.415 0 0 0 14.584 6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SevenCircle;
