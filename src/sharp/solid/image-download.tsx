import React from "react";
const ImageDownload: React.FC<
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
        d="M20.707 7.707 17 11.414l-3.707-3.707 1.414-1.414L16 7.586V2h2v5.586l1.293-1.293zM17 13.253l-5.546-5.546L14.7 4.462V3H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V8.253zM7.232 21h12.769v-3.765l-4.932-3.288z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ImageDownload;
