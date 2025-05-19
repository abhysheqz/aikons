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
        d="M14.75 15.5a2.25 2.25 0 0 1 4.5 0v.75H20a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 .75-.75h.75zm1.5.75h1.5v-.75a.75.75 0 0 0-1.5 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.75 3.75v5.884a23 23 0 0 0-1.26 1.08 14 14 0 0 0-1.203 1.242c-.357.426-.701.916-.872 1.406-.303.872-.148 1.677.133 2.358.215.523.534 1.035.803 1.465l.183.296c.283.466.903 1.237 1.413 1.851.263.316.51.607.69.817l.113.13V22c0 .414.336.75.75.75h4.376a2.3 2.3 0 0 1-.128-.75v-5c0-1 .652-1.848 1.555-2.14a3.75 3.75 0 0 1 5.633-2.57 2.9 2.9 0 0 0-.583-.857c-2.034-2.047-4.74-2.622-6.603-2.685V3.75a2.5 2.5 0 0 0-5 0"
      />
    </svg>
  );
};
export default TouchLocked_02;
