import React from "react";
const UserCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m-.005 4A3.25 3.25 0 0 0 8.748 8.5c0 1.287.747 2.4 1.832 2.926a5.75 5.75 0 0 0-4.329 5.46l-.006.314.22.225a7.72 7.72 0 0 0 5.53 2.325 7.72 7.72 0 0 0 5.53-2.325l.22-.225-.006-.315a5.75 5.75 0 0 0-4.329-5.46A3.25 3.25 0 0 0 15.242 8.5a3.25 3.25 0 0 0-3.247-3.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UserCircle;
