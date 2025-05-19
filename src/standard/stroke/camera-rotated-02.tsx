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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 6h3.5l.772-2.316A1 1 0 0 1 9.221 3h5.558a1 1 0 0 1 .949.684L16.5 6H20a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15 10.5-.014 1.584-.83-.518a3.5 3.5 0 0 0-2.12-.715c-1.953 0-3.536 1.6-3.536 3.575C8.5 16.4 10.083 18 12.035 18c1.71 0 3.137-1.228 3.465-2.86"
      />
    </svg>
  );
};
export default CameraRotated_02;
