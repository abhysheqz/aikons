import React from "react";
const Matches: React.FC<
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
        d="M5.25 2.179c0-.513.432-.929.964-.929h11.572c.532 0 .964.416.964.929V7.75h-1.929V3.107H7.18V7.75H5.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.75 4v4h-1.5V4zM9.75 4v4h-1.5V4zM15.75 4v4h-1.5V4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 7.25a.75.75 0 0 0-.75.75v14c0 .414.336.75.75.75h14a.75.75 0 0 0 .75-.75V8a.75.75 0 0 0-.75-.75zm10.5 9.1c0 1.74-1.486 3.15-3.32 3.15-2.902 0-4.425-3.375-3.318-6.187L10.833 15s-.313-3.375 1.821-4.5c0 1.365.728 2.185 1.447 2.996.703.793 1.399 1.577 1.399 2.854"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Matches;
