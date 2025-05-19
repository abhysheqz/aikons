import React from "react";
const DoNotTouch_02: React.FC<
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
        d="M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.516 7.104v7.165a.45.45 0 0 1-.772.314l-2.163-2.388c-.868-.958-2.45-.6-2.823.638-.14.463-.07.964.19 1.372l4.323 6.775a2.75 2.75 0 0 0 2.318 1.27h7.905c1.67 0 3.084-1.091 3.57-2.599l-9.267-9.266v1.035a.45.45 0 1 1-.9 0V9.485zM11.797 8.264l9.447 9.447V7.153a1.26 1.26 0 1 0-2.52 0v3.845a.45.45 0 0 1-.9 0V4.532a1.27 1.27 0 1 0-2.539 0v5.822a.45.45 0 1 1-.9 0V3.046a1.294 1.294 0 1 0-2.588 0zM10.897 7.364l-2.38-2.381v-.969a1.19 1.19 0 0 1 2.38 0z"
      />
    </svg>
  );
};
export default DoNotTouch_02;
