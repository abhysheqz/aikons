import React from "react";
const SwipeDown_01: React.FC<
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
        d="M18.5 1a1 1 0 0 1 1 1v3.586l.793-.793a1 1 0 1 1 1.414 1.414l-2.5 2.5a1 1 0 0 1-1.414 0l-2.5-2.5a1 1 0 0 1 1.414-1.414l.793.793V2a1 1 0 0 1 1-1M7.25 3.75a2.5 2.5 0 0 1 5 0v4.998c1.864.063 4.569.638 6.603 2.685.936.942.991 2.32.82 3.46-.174 1.17-.62 2.33-.992 3.107l-.931 2.155V22a.75.75 0 0 1-.75.75H8a.75.75 0 0 1-.75-.75v-1.744l-4.462-5.703v-.001a2.53 2.53 0 0 1-.011-3.106 2.4 2.4 0 0 1 3.55-.292l.923.97z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SwipeDown_01;
