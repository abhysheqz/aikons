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
        fill="currentColor"
        d="M3.75 8a5.25 5.25 0 1 1 7.005 4.95 7.75 7.75 0 0 1 5.995 7.55v.75H1.25v-.75a7.75 7.75 0 0 1 5.995-7.55A5.25 5.25 0 0 1 3.75 8"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.57 7.75v1.578c.327.116.627.29.887.51l1.342-.782.951 1.631-1.341.783a2.9 2.9 0 0 1 0 1.06l1.341.783-.951 1.631-1.342-.782c-.26.22-.56.394-.887.51v1.578h-1.89v-1.578a2.8 2.8 0 0 1-.886-.51l-1.342.782-.952-1.631 1.342-.783a2.8 2.8 0 0 1 0-1.06l-1.342-.783.952-1.631 1.342.782c.26-.22.56-.394.887-.51V7.75zm-.945 3.306a.943.943 0 1 0 0 1.888.944.944 0 1 0 0-1.888"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UserSettings_02;
