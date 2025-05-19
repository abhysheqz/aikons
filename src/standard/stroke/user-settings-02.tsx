import React from "react";
const UserSettings_02: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 8.5a5 5 0 1 0-10 0 5 5 0 0 0 10 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 20.5a7 7 0 1 0-14 0M19 14v1.5m0-1.5a2 2 0 0 0 1.728-.992M19 14a2 2 0 0 1-1.728-.992M19 10V8.5m0 1.5a2 2 0 0 1 1.728.992M19 10a2 2 0 0 0-1.728.992M22 10.25l-1.272.742M16 13.75l1.272-.742M22 13.75l-1.272-.742M16 10.25l1.272.742m3.456 2.016A2 2 0 0 0 21 12c0-.368-.1-.712-.272-1.008m-3.456 0A2 2 0 0 0 17 12c0 .368.1.712.272 1.008"
      />
    </svg>
  );
};
export default UserSettings_02;
