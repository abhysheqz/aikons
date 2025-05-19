import React from "react";
const CameraRotated_02: React.FC<
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
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6h.009"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.986 10v2.084l-.83-.518a3.5 3.5 0 0 0-2.12-.715c-1.953 0-3.536 1.6-3.536 3.575C8.5 16.4 10.083 18 12.035 18c1.71 0 3.137-1.228 3.465-2.86"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M22.064 21.91V6.11a.1.1 0 0 0-.1-.1h-4.902l-1.988-3.946a.1.1 0 0 0-.09-.055H9.1a.1.1 0 0 0-.09.055L7.06 6.01h-4.9a.1.1 0 0 0-.1.1v15.8a.1.1 0 0 0 .1.1h19.805a.1.1 0 0 0 .1-.1Z"
      />
    </svg>
  );
};
export default CameraRotated_02;
