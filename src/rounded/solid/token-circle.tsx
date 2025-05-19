import React from "react";
const TokenCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m1.192 6.604-.684-1.075a.602.602 0 0 0-1.016 0l-.684 1.075a9.6 9.6 0 0 1-2.954 2.954l-1.075.684a.602.602 0 0 0 0 1.016l1.075.684a9.6 9.6 0 0 1 2.954 2.954l.684 1.075a.602.602 0 0 0 1.016 0l.684-1.075a9.6 9.6 0 0 1 2.954-2.954l1.075-.684a.602.602 0 0 0 0-1.016l-1.075-.684a9.6 9.6 0 0 1-2.954-2.954"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TokenCircle;
