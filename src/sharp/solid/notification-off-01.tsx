import React from "react";
const NotificationOff_01: React.FC<
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
        d="M9.75 3.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M12 2.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5M10 18.75a2 2 0 0 0 4 0h2a4 4 0 0 1-8 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M21.336 22.75 1.25 2.664 2.664 1.25 22.75 21.336zM19.59 11.452A7.6 7.6 0 0 0 8.591 5.056L21.75 18.214V16.5a.75.75 0 0 0-.183-.49l-1.976-2.289v-2.27"
      />
      <path
        fill="currentColor"
        d="M2.25 16.5v3.25h17.5L6.55 6.551a7.58 7.58 0 0 0-2.142 4.9v2.27L2.431 16.01a.75.75 0 0 0-.182.49"
      />
    </svg>
  );
};
export default NotificationOff_01;
