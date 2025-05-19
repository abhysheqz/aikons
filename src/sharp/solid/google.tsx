import React from "react";
const Google: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M8 12a4 4 0 0 1 6.828-2.828l1.415-1.415A6 6 0 1 0 18 12v-1h-6v2h3.874A4.002 4.002 0 0 1 8 12"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Google;
