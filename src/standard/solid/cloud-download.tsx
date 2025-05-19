import React from "react";
const CloudDownload: React.FC<
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
        d="M12 12.5a1 1 0 0 1 1 1v4h1.5a1 1 0 0 1 .707 1.707l-2.5 2.5a1 1 0 0 1-1.414 0l-2.5-2.5A1 1 0 0 1 9.5 17.5H11v-4a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 13.018a5.76 5.76 0 0 1 4.603-5.644A6.254 6.254 0 0 1 12 2.25a6.255 6.255 0 0 1 6.247 6.064 5.26 5.26 0 0 1 4.503 5.205 5.256 5.256 0 0 1-4.667 5.226 1 1 0 0 1-.083.005h-1.012A2.5 2.5 0 0 0 14.5 16v-2.5a2.5 2.5 0 0 0-5 0V16a2.5 2.5 0 0 0-2.487 2.75H6a1 1 0 0 1-.15-.015c-2.638-.537-4.6-2.944-4.6-5.717"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CloudDownload;
