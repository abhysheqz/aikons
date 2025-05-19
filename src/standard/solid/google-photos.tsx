import React from "react";
const GooglePhotos: React.FC<
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
        d="M17 6.958C17 9.743 14.761 12 12 12V2.925c0-.557.452-1.019.994-.909C15.279 2.481 17 4.517 17 6.958M12 12c0 2.761 2.257 5 5.042 5 2.441 0 4.477-1.721 4.942-4.006.11-.542-.352-.994-.91-.994zm-.003 0H2.925c-.557 0-1.019-.452-.909-.994C2.481 8.721 4.517 7 6.958 7 9.743 7 12 9.239 12 12v9.075c0 .557-.452 1.019-.994.909C8.721 21.519 7 19.483 7 17.042c0-2.784 2.237-5.04 4.997-5.042"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GooglePhotos;
