import React from "react";
const AiSheets: React.FC<
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
        d="M1.25 2.25h21.5v11.213h-1.954V10.05H9.068v3.9h3.91v1.95h-3.91v3.9h3.91v1.95H1.25zm1.955 7.8v3.9h3.909v-3.9zM7.114 8.1h-3.91V4.2h3.91zm1.954 0h11.728V4.2H9.068zm-1.954 7.8h-3.91v3.9h3.91z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.025 12.75h.45l.99 3.285 3.285.99v.45l-3.285.99-.99 3.285h-.45l-.99-3.285-3.285-.99v-.45l3.285-.99z"
      />
    </svg>
  );
};
export default AiSheets;
