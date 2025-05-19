import React from "react";
const CircleArrowRightDouble: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m-4.6 7.2L10.063 12 7.4 15.55l1.2.9L11.938 12 8.6 7.55zm5 0L15.063 12 12.4 15.55l1.2.9L16.938 12 13.6 7.55z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowRightDouble;
