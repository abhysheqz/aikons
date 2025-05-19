import React from "react";
const UserShield_02: React.FC<
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
        d="M19.25 15.783s-.597-.204-.747-.274a5.4 5.4 0 0 1-1.1-.688c-.816-.662-1.653-1.774-1.653-3.476V8.563h.75c.66 0 1.247-.171 1.678-.349.213-.088 1.072-.624 1.072-.624s.86.536 1.072.624c.43.178 1.019.35 1.678.35h.75v2.78c0 1.703-.837 2.815-1.652 3.477a5.4 5.4 0 0 1-1.1.688c-.15.07-.748.274-.748.274"
      />
    </svg>
  );
};
export default UserShield_02;
