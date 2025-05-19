import React from "react";
const GoogleGemini: React.FC<
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
        d="M12 2.25a.75.75 0 0 1 .75.75A8.25 8.25 0 0 0 21 11.25a.75.75 0 0 1 0 1.5A8.25 8.25 0 0 0 12.75 21a.75.75 0 0 1-1.5 0A8.25 8.25 0 0 0 3 12.75a.75.75 0 0 1 0-1.5A8.25 8.25 0 0 0 11.25 3a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GoogleGemini;
