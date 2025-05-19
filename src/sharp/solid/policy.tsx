import React from "react";
const Policy: React.FC<
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
        d="M21.125 1.25h-18.5v21.5h11.483l.967-5.821a4.25 4.25 0 0 1 6.05-5.92zm-14 4h9.5v1.5h-9.5zm0 4h6v1.5h-6zm11.25 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-3 5.5.808-4.858a4.23 4.23 0 0 0 2.192.608c.802 0 1.552-.222 2.192-.608l.808 4.858-3-1.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Policy;
