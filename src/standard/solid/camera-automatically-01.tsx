import React from "react";
const CameraAutomatically_01: React.FC<
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
        d="m17.04 5.25-.6-1.803a1.75 1.75 0 0 0-1.66-1.197H9.22a1.75 1.75 0 0 0-1.66 1.197l-.6 1.803H4.433a2.75 2.75 0 0 0-2.748 2.658l-.367 11a2.75 2.75 0 0 0 2.749 2.842h15.864a2.75 2.75 0 0 0 2.749-2.842l-.367-11a2.75 2.75 0 0 0-2.748-2.658zM10.998 6a1 1 0 1 1 1 1 1 1 0 0 1-1-1m.5 4a1 1 0 0 0-.933.641l-2.5 6.5a1 1 0 1 0 1.867.718l.523-1.359h3.088l.522 1.359a1 1 0 1 0 1.867-.718l-2.5-6.5a1 1 0 0 0-.933-.641zm1.275 4.5h-1.549l.775-2.014z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CameraAutomatically_01;
