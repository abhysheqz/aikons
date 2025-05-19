import React from "react";
const CameraRotated_01: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15 10.5-.014 1.584-.83-.518a3.5 3.5 0 0 0-2.12-.715c-1.953 0-3.536 1.6-3.536 3.575C8.5 16.4 10.083 18 12.035 18c1.71 0 3.137-1.228 3.465-2.86"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M7.5 6H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3.5m.5 1.5-1.272-3.816A1 1 0 0 0 14.779 3H9.221a1 1 0 0 0-.949.684L7 7.5"
      />
    </svg>
  );
};
export default CameraRotated_01;
