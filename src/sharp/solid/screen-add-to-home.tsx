import React from "react";
const ScreenAddToHome: React.FC<
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
        d="M6.25 1.25h14.5v21.5H6.25v-5.568L9 14.432v1.818h4.5v-9.5H6.25zM13.5 18.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.25 8h7v7h-2v-3.586L4.664 17 3.25 15.586 8.836 10H5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ScreenAddToHome;
