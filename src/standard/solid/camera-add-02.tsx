import React from "react";
const CameraAdd_02: React.FC<
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
        d="M7.56 3.447A1.75 1.75 0 0 1 9.22 2.25h5.56a1.75 1.75 0 0 1 1.66 1.197l.6 1.803H20A2.75 2.75 0 0 1 22.75 8v11A2.75 2.75 0 0 1 20 21.75H4A2.75 2.75 0 0 1 1.25 19V8A2.75 2.75 0 0 1 4 5.25h2.96zM12 9.5a1 1 0 0 1 1 1V13h2.5a1 1 0 1 1 0 2H13v2.5a1 1 0 1 1-2 0V15H8.5a1 1 0 1 1 0-2H11v-2.5a1 1 0 0 1 1-1M12 5a1 1 0 1 0 0 2 1 1 0 1 0 0-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CameraAdd_02;
