import React from "react";
const LinkCircle: React.FC<
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
        d="M12 4a8 8 0 1 0 8 8h2c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15 2h7v7h-2V5.414l-4.293 4.293-1.414-1.414L18.586 4H15z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LinkCircle;
