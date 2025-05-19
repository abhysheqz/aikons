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
        fill="currentColor"
        fillRule="evenodd"
        d="M7.56 3.447A1.75 1.75 0 0 1 9.22 2.25h5.56a1.75 1.75 0 0 1 1.66 1.197l.6 1.803H20A2.75 2.75 0 0 1 22.75 8v11A2.75 2.75 0 0 1 20 21.75H4A2.75 2.75 0 0 1 1.25 19V8A2.75 2.75 0 0 1 4 5.25h2.96zM11 6a1 1 0 1 1 1 1 1 1 0 0 1-1-1m4.75 4.507a.75.75 0 0 0-1.5-.014l-.002.229a4.24 4.24 0 0 0-2.213-.62c-2.374 0-4.285 1.943-4.285 4.324s1.91 4.324 4.285 4.324c2.08 0 3.805-1.492 4.2-3.462a.75.75 0 1 0-1.47-.295c-.26 1.293-1.39 2.257-2.73 2.257-1.53 0-2.785-1.257-2.785-2.824 0-1.568 1.255-2.825 2.785-2.825.626 0 1.202.209 1.668.562l.056.04.83.517a.75.75 0 0 0 1.147-.629z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CameraRotated_02;
