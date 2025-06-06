import React from "react";
const CircleArrowLeftRight: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m-.97 6.28L9.97 6.47 7.44 9l2.53 2.53 1.06-1.06-.72-.72h5.19v-1.5h-5.19zm1.94 6 .72.72H8.5v1.5h5.189l-.72.72 1.061 1.06 2.53-2.529-2.53-2.531z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowLeftRight;
