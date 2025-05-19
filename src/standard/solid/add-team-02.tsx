import React from "react";
const AddTeam_02: React.FC<
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
        d="M5.25 7.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0"
      />
      <path
        fill="currentColor"
        d="M13.023 11.724A5.49 5.49 0 0 0 15 7.5a5.49 5.49 0 0 0-1.977-4.224q.236-.026.477-.026a4.25 4.25 0 1 1-.477 8.474"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.75 12.75a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.012 14.5c-1.561-.793-3.468-1.25-5.512-1.25-2.292 0-4.413.576-6.066 1.554-.804.476-1.184 1.346-1.184 2.181V20c0 .414.336.75.75.75h12.734a2.24 2.24 0 0 1-.234-1V19h-.75a2.25 2.25 0 0 1 0-4.5z"
      />
    </svg>
  );
};
export default AddTeam_02;
