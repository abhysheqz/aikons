import React from "react";
const Pensive: React.FC<
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12M15 15.25v1.5H9v-1.5zM7.706 8.746a.775.775 0 0 0 .734.504c.345 0 .63-.216.733-.504l1.412.508A2.275 2.275 0 0 1 8.44 10.75c-.984 0-1.83-.619-2.145-1.496zm7.122 0a.775.775 0 0 0 .734.504c.344 0 .63-.216.733-.504l1.411.508a2.275 2.275 0 0 1-2.144 1.496c-.985 0-1.83-.619-2.145-1.496z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pensive;
