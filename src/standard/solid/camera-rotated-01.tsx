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
        fill="currentColor"
        fillRule="evenodd"
        d="m17.04 5.25-.6-1.803a1.75 1.75 0 0 0-1.66-1.197H9.22a1.75 1.75 0 0 0-1.66 1.197l-.6 1.803H4.433a2.75 2.75 0 0 0-2.748 2.658l-.367 11a2.75 2.75 0 0 0 2.749 2.842h15.864a2.75 2.75 0 0 0 2.749-2.842l-.367-11a2.75 2.75 0 0 0-2.748-2.658zm-2.036 4.5a.75.75 0 0 1 .743.757l-.014 1.584a.75.75 0 0 1-1.147.63l-.83-.519-.056-.039a2.74 2.74 0 0 0-1.667-.562c-1.53 0-2.786 1.257-2.786 2.825 0 1.567 1.255 2.824 2.786 2.824 1.34 0 2.47-.963 2.73-2.257a.75.75 0 1 1 1.47.295c-.396 1.97-2.12 3.462-4.2 3.462-2.375 0-4.286-1.944-4.286-4.324S9.658 10.1 12.033 10.1c.81 0 1.567.227 2.213.62l.002-.228a.75.75 0 0 1 .756-.743M11.997 5a1 1 0 1 0 0 2 1 1 0 1 0 0-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CameraRotated_01;
