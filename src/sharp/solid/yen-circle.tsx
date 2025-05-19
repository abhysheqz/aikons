import React from "react";
const YenCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m-3.6 6.7 2.85 3.8v1H9v1.5h2.25v2.25h1.5v-2.25H15v-1.5h-2.25v-1l2.85-3.8-1.2-.9-2.4 3.2-2.4-3.2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default YenCircle;
