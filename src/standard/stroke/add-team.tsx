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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 7.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0M13.5 11a3.5 3.5 0 1 0 0-7M13 20H2v-2a4 4 0 0 1 4-4h5c.729 0 1.412.195 2 .535M19 14v6m3-3h-6"
      />
    </svg>
  );
};
export default AddTeam;
