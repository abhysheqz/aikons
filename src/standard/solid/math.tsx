import React from "react";
const Math: React.FC<
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
        d="M1.75 4.5A2.75 2.75 0 0 1 4.5 1.75h15a2.75 2.75 0 0 1 2.75 2.75v15a2.75 2.75 0 0 1-2.75 2.75h-15a2.75 2.75 0 0 1-2.75-2.75zM12.735 9H18a1 1 0 1 0 0-2h-6a1 1 0 0 0-.954.702l-1.662 5.316-.955-2.39a1 1 0 0 0-1.484-.46l-1.5 1a1 1 0 0 0 1.11 1.664l.474-.316 1.543 3.855a1 1 0 0 0 1.883-.073zm1.972 2.293a1 1 0 0 0-1.414 1.414l.793.793-.793.793a1 1 0 0 0 1.414 1.414l.793-.793.793.793a1 1 0 0 0 1.414-1.414l-.793-.793.793-.793a1 1 0 0 0-1.414-1.414l-.793.793z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Math;
