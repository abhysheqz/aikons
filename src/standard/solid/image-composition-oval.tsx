import React from "react";
const ImageCompositionOval: React.FC<
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
        d="M2.58 3.781c6.012-3.375 12.828-3.375 18.84 0 .854.48 1.33 1.386 1.33 2.32v10.1l-.412-.209-.025-.012a7.7 7.7 0 0 0-3.242-.73c-1.864-.007-3.672.69-5.32 1.987-.64-.9-1.4-1.699-2.25-2.358-2.629-2.04-5.79-2.629-9.5-2.629H1.25V6.101c0-.934.476-1.84 1.33-2.32m11.967 14.74c.55 1.03.957 2.155 1.19 3.334l.002.014.084.479a19.8 19.8 0 0 0 5.598-2.13c.853-.478 1.329-1.385 1.329-2.32v-.017l-1.075-.543a6.2 6.2 0 0 0-2.605-.588h-.004c-1.511-.006-3.047.572-4.52 1.771m-.202 4.078-.082-.461c-.487-2.471-1.854-4.656-3.681-6.074C8.335 14.32 5.569 13.75 2 13.75h-.75v4.148c0 .935.476 1.842 1.33 2.32 3.74 2.1 7.79 2.893 11.765 2.381M7.5 6.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ImageCompositionOval;
