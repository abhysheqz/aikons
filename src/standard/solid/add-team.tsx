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
        fillRule="evenodd"
        d="M4.25 7.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0M1 18a5 5 0 0 1 5-5h5c.91 0 1.764.243 2.5.67a1 1 0 0 1 .5.865V20a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zM19 13a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1"
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
