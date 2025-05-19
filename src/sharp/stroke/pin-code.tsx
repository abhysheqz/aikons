import React from "react";
const PinCode: React.FC<
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
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.984 12h.009M12.988 12h.009M16.993 12h.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21.898 4.498H7.478l-5.456 7.443a.1.1 0 0 0 0 .118l5.457 7.443h14.419a.1.1 0 0 0 .1-.1V4.598a.1.1 0 0 0-.1-.1Z"
      />
    </svg>
  );
};
export default PinCode;
