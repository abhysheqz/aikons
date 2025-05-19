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
        strokeWidth={1.5}
        d="M12 7.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M13.5 11a3.5 3.5 0 1 0 0-7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.143 20H3.857C2.831 20 2 19.233 2 18.286 2 15.919 4.079 14 6.643 14h3.714a4.9 4.9 0 0 1 2.786.857"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M19 14v6m3-3h-6"
      />
    </svg>
  );
};
export default AddTeam;
