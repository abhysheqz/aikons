import React from "react";
const Drag_01: React.FC<
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
        d="M18.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 1 1-1.414-1.414L18.586 5H17a1 1 0 1 1 0-2h1.586l-.293-.293a1 1 0 0 1 0-1.414M5.707 1.293a1 1 0 0 1 0 1.414L5.414 3H7a1 1 0 0 1 0 2H5.414l.293.293a1 1 0 0 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414l2-2a1 1 0 0 1 1.414 0M9.25 3.75a2.5 2.5 0 0 1 5 0v4.998c1.864.063 4.569.638 6.603 2.685.936.942.991 2.32.82 3.46-.174 1.17-.62 2.33-.992 3.107l-.931 2.155V22a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75v-1.744l-4.462-5.703v-.001a2.53 2.53 0 0 1-.011-3.106 2.4 2.4 0 0 1 3.55-.292l.923.97z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Drag_01;
