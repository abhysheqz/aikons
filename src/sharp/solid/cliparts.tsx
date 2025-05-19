import React from "react";
const Cliparts: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12v-.405L12.405 1.25zM12 8a4 4 0 0 0 4 4h4.39L12 3.61z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Cliparts;
