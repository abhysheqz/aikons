import React from "react";
const UserWarning_02: React.FC<
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
        d="M7.25 7.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.75 4.75a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m0 7a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0v-.01a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.434 14.804c1.653-.978 3.774-1.554 6.066-1.554s4.413.576 6.066 1.554c.803.476 1.184 1.346 1.184 2.181V19A1.75 1.75 0 0 1 17 20.75H6A1.75 1.75 0 0 1 4.25 19v-2.015c0-.835.38-1.705 1.184-2.181"
      />
    </svg>
  );
};
export default UserWarning_02;
