import React from "react";
const UserUnlock_01: React.FC<
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
        d="M17.99 13.25c-.554 0-1.002.449-1.002 1.002v.891h2.705a2.553 2.553 0 0 1 2.555 2.552v1.503a2.553 2.553 0 0 1-2.555 2.552h-3.386a2.553 2.553 0 0 1-2.555-2.552v-1.503c0-1.124.727-2.077 1.736-2.418v-1.025a2.502 2.502 0 0 1 4.252-1.788.75.75 0 0 1-1.05 1.072 1 1 0 0 0-.7-.286M14.238 13.865a7.7 7.7 0 0 0-2.981-1.415 5.252 5.252 0 0 0-1.755-10.2 5.25 5.25 0 0 0-1.755 10.2A7.75 7.75 0 0 0 1.752 20c0 .414.336.75.75.75h10.331c-.212-.474-.33-1-.33-1.554v-1.504c0-1.34.692-2.513 1.735-3.19z"
      />
    </svg>
  );
};
export default UserUnlock_01;
