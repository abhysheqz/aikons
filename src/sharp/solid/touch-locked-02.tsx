import React from "react";
const TouchLocked_02: React.FC<
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
        d="M17 13.25a2.25 2.25 0 0 0-2.25 2.25v.75h-1.5v6.5h7.5v-6.5h-1.5v-.75A2.25 2.25 0 0 0 17 13.25m.75 2.25v.75h-1.5v-.75a.75.75 0 0 1 1.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.75 3.75v5.884a23 23 0 0 0-1.26 1.08c-.403.373-.835.803-1.203 1.242-.357.426-.701.916-.872 1.406-.303.872-.148 1.677.133 2.358.215.523.534 1.035.803 1.465l.183.296c.283.466.903 1.237 1.413 1.851.263.316.51.607.69.817l.113.13v2.471h5v-8h1.575a3.75 3.75 0 0 1 5.61-2.462 2.9 2.9 0 0 0-.582-.855c-2.034-2.047-4.74-2.622-6.603-2.685V3.75a2.5 2.5 0 0 0-5 0"
      />
    </svg>
  );
};
export default TouchLocked_02;
