import React from "react";
const ViewOffSlash: React.FC<
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
        d="M3.414 2 22 20.586 20.586 22 2 3.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M21.68 13.552A23 23 0 0 1 19.533 16L8.576 5.043c1.061-.484 2.212-.793 3.422-.793 3.025 0 5.673 1.926 7.495 3.71.925.908 1.672 1.812 2.187 2.488.198.26.64.917.897 1.299l.171.253-.17.253c-.258.382-.7 1.039-.898 1.299M4.503 7.96a18 18 0 0 1 1.86-1.595l3.15 3.15a3.515 3.515 0 0 0 4.97 4.97l3.15 3.15c-1.593 1.175-3.522 2.115-5.635 2.115-3.024 0-5.673-1.926-7.495-3.71a23 23 0 0 1-2.187-2.488 40 40 0 0 1-.897-1.299L1.25 12l.17-.253c.257-.382.7-1.039.897-1.299a23 23 0 0 1 2.187-2.487"
      />
    </svg>
  );
};
export default ViewOffSlash;
