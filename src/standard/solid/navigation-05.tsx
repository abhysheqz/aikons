import React from "react";
const Navigation_05: React.FC<
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m14.776-5.417L10.57 8.831a3.2 3.2 0 0 0-1.738 1.738l-2.248 5.457c-.36.876.515 1.751 1.39 1.39l5.459-2.247a3.2 3.2 0 0 0 1.737-1.738l2.248-5.458c.36-.875-.515-1.75-1.39-1.39M13 12a1 1 0 1 0-2 0v.01a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Navigation_05;
