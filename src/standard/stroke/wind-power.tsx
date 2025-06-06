import React from "react";
const WindPower: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.5 11a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M21 10c-.328-2.67-1.912-5.055-4-6.5M3 10c.328-2.67 1.912-5.055 4-6.5M12 9.5V7M11.405 7h1.19a1 1 0 0 0 .995-.9L14 2h-4l.41 4.1a1 1 0 0 0 .995.9M17.309 12.36a1 1 0 0 0-1.264.399l-.581.968a1 1 0 0 0 .258 1.314L19 17.5l2-3.5zM6.692 12.36a1 1 0 0 1 1.263.399l.581.968a1 1 0 0 1-.258 1.314L5 17.5 3 14zM10.704 11.75 8.54 13M13.304 11.75 15.469 13M12 12.5V22M18 22H6"
      />
    </svg>
  );
};
export default WindPower;
