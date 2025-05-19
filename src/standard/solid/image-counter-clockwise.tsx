import React from "react";
const ImageCounterClockwise: React.FC<
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
        d="M14.727 3.182a.75.75 0 0 0-1.455-.364l-1 4a.75.75 0 0 0 .521.903l3.5 1a.75.75 0 1 0 .413-1.442l-2.29-.654A4.25 4.25 0 0 1 20.4 12.55a.75.75 0 1 0 1.2.901 5.75 5.75 0 0 0-7.308-8.524zM4 6.25h7.127l-.067.265a2 2 0 0 0 1.391 2.408l3.5 1a2 2 0 0 0 2.544-2.08c.164.351.255.744.255 1.157v10A2.75 2.75 0 0 1 16 21.75H4A2.75 2.75 0 0 1 1.25 19V9A2.75 2.75 0 0 1 4 6.25m4.492 5.24a1 1 0 1 0-2 0v.01a1 1 0 1 0 2 0zM8.5 17.5 13 13l4.25 4.25V19c0 .69-.56 1.25-1.25 1.25H4c-.69 0-1.25-.56-1.25-1.25v-.75L6 15z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ImageCounterClockwise;
