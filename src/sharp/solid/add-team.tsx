import React from "react";
const AddTeam: React.FC<
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
        d="M4.25 7.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0M1.25 18A4.75 4.75 0 0 1 6 13.25h5c.714 0 1.392.158 2 .44v7.06H1.25z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.75 12.75v3h3v2h-3v3h-2v-3h-3v-2h3v-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.5 11.632a4.25 4.25 0 1 0 0-8.263A5.73 5.73 0 0 1 14.25 7.5a5.73 5.73 0 0 1-1.75 4.132"
      />
    </svg>
  );
};
export default AddTeam;
