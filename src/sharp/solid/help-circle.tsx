import React from "react";
const HelpCircle: React.FC<
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m9.25-2a1.5 1.5 0 1 1 1.5 1.5 1 1 0 0 0-1 1v2h2v-1.145A3.502 3.502 0 0 0 12 6.5 3.5 3.5 0 0 0 8.5 10zm.5 6v1.5h2V16z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HelpCircle;
