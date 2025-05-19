import React from "react";
const Beater: React.FC<
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
        d="M16.5 11a1 1 0 0 1 1 1v3.158a1 1 0 1 1-2 0V12a1 1 0 0 1 1-1m0 8.421a1 1 0 0 1 1 1V22a1 1 0 1 1-2 0v-1.579a1 1 0 0 1 1-1M7 2a1 1 0 0 1 1-1h9a2 2 0 0 1 2 2v2a1 1 0 1 1-2 0V3H8a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 4.25A2.75 2.75 0 0 0 2.25 7v3A2.75 2.75 0 0 0 5 12.75h14A2.75 2.75 0 0 0 21.75 10V7A2.75 2.75 0 0 0 19 4.25zm8 3.25a1 1 0 1 0 0 2h.009a1 1 0 0 0 0-2zm3.991 0a1 1 0 0 0 0 2H17a1 1 0 1 0 0-2zM13 17a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm5 0h-3v3h3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Beater;
