import React from "react";
const CameraAdd_01: React.FC<
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
        d="m17.04 5.25-.6-1.803a1.75 1.75 0 0 0-1.66-1.197H9.22a1.75 1.75 0 0 0-1.66 1.197l-.6 1.803H4.433a2.75 2.75 0 0 0-2.748 2.658l-.367 11a2.75 2.75 0 0 0 2.749 2.842h15.864a2.75 2.75 0 0 0 2.749-2.842l-.367-11a2.75 2.75 0 0 0-2.748-2.658zM11.998 9.5a1 1 0 0 1 1 1V13h2.5a1 1 0 1 1 0 2h-2.5v2.5a1 1 0 1 1-2 0V15h-2.5a1 1 0 1 1 0-2h2.5v-2.5a1 1 0 0 1 1-1m0-4.5a1 1 0 0 0 0 2 1 1 0 1 0 0-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CameraAdd_01;
