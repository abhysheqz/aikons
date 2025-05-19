import React from "react";
const CloudUpload: React.FC<
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
        d="M12 21.875a1 1 0 0 0 1-1v-4h1.5a1 1 0 0 0 .707-1.707l-2.5-2.5a1 1 0 0 0-1.414 0l-2.5 2.5a1 1 0 0 0 .707 1.707H11v4a1 1 0 0 0 1 1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.25 12.893A5.76 5.76 0 0 1 5.853 7.25 6.254 6.254 0 0 1 12 2.125a6.255 6.255 0 0 1 6.247 6.064 5.26 5.26 0 0 1 4.503 5.205 5.256 5.256 0 0 1-4.667 5.226 1 1 0 0 1-.083.005h-3v-.3a2.5 2.5 0 0 0 1.268-4.218l-2.5-2.5a2.5 2.5 0 0 0-3.536 0l-2.5 2.5A2.5 2.5 0 0 0 9 18.325v.3H6a1 1 0 0 1-.15-.015c-2.638-.537-4.6-2.944-4.6-5.717"
      />
    </svg>
  );
};
export default CloudUpload;
