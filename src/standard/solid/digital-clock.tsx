import React from "react";
const DigitalClock: React.FC<
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
        d="M5 17a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0V18a1 1 0 0 1 1-1m14 0a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0V18a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 5.25A2.75 2.75 0 0 0 1.25 8v8A2.75 2.75 0 0 0 4 18.75h16A2.75 2.75 0 0 0 22.75 16V8A2.75 2.75 0 0 0 20 5.25zm8.5 4a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75H15a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 0-.75-.75zm.75 4v-2.5h1v2.5zm-6-3.25a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zm11 0a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zM9.5 10a.75.75 0 0 0 0 1.5h.009a.75.75 0 0 0 0-1.5zm0 2.5a.75.75 0 0 0 0 1.5h.009a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 4.5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2V6H8V4.5H6V6H4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DigitalClock;
