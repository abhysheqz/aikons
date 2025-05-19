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
        fillRule="evenodd"
        d="M9.5 3.25a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5m9.25 12.5v-3h-2v3h-3v2h3v3h2v-3h3v-2zm-5.727-4.026A5.49 5.49 0 0 0 15 7.5a5.49 5.49 0 0 0-1.977-4.224q.236-.026.477-.026a4.25 4.25 0 1 1-.477 8.474M9.5 13.25c2.04 0 3.948.456 5.512 1.25H12.5V19h3v1.75H2.25v-5.12l.293-.225C4.289 14.063 6.777 13.25 9.5 13.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AddTeam_02;
