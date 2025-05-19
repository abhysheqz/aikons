import React from "react";
const DigitalClock: React.FC<
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
        d="M4 21.5v-3h2v3zm14 0v-3h2v3zM5.491 2.5h4.016l1.188 2.972-1.392.557L8.49 4H6.507l-.812 2.029-1.392-.557z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 5a.75.75 0 0 0-.75.75v13c0 .414.336.75.75.75h20a.75.75 0 0 0 .75-.75v-13A.75.75 0 0 0 22 5zm10.5 4.5a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75H15a.75.75 0 0 0 .75-.75v-4A.75.75 0 0 0 15 9.5zm.75 4V11h1v2.5zm-6 1.5V9.5h-1.5V15zm11 0V9.5h-1.5V15zm-7.991-4.75H8.75v1.5h1.509zm0 2.5H8.75v1.5h1.509z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DigitalClock;
