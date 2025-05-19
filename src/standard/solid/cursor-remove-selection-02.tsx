import React from "react";
const CursorRemoveSelection_02: React.FC<
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
        d="M12.75 18.25a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.331 4.87c-.37-.963.576-1.91 1.54-1.539l15.117 5.815c1.042.4 1.009 1.887-.051 2.24l-6.413 2.138-2.137 6.413c-.354 1.06-1.84 1.093-2.241.05z"
      />
    </svg>
  );
};
export default CursorRemoveSelection_02;
