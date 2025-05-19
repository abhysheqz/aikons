import React from "react";
const AiScheduling: React.FC<
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
        d="M16.881 2.716H7.119V1.25H5.167v1.466H1.75V22.75h20.5V2.716h-3.417V1.25h-1.952zM3.703 9.068h16.595v11.728H3.703z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.775 10.5h.45l.99 3.285 3.285.99v.45l-3.285.99-.99 3.285h-.45l-.99-3.285-3.285-.99v-.45l3.285-.99z"
      />
    </svg>
  );
};
export default AiScheduling;
