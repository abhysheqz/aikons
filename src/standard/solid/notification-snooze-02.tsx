import React from "react";
const NotificationSnooze_02: React.FC<
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
        d="M8.218 20.5A4.29 4.29 0 0 0 12 22.75a4.29 4.29 0 0 0 3.783-2.25z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.75 2.25a1 1 0 0 1 1-1h5a1 1 0 0 1 .768 1.64l-3.633 4.36h2.865a1 1 0 1 1 0 2h-5a1 1 0 0 1-.768-1.64l3.633-4.36H15.75a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.505 2.407A7.25 7.25 0 0 0 4.75 9.5v5.307c0 1.32-.803 2.507-2.029 2.997A.75.75 0 0 0 3 19.25h18a.75.75 0 0 0 .279-1.446 3.23 3.23 0 0 1-2.029-2.997V10.5h-3.5a2.25 2.25 0 0 1-1.728-3.69l1.924-2.31h-.196a2.25 2.25 0 0 1-2.245-2.093"
      />
    </svg>
  );
};
export default NotificationSnooze_02;
