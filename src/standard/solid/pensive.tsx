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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m7 4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75m-.544-7.254a.775.775 0 0 0 .733.504c.345 0 .63-.216.734-.504a.75.75 0 1 1 1.411.508A2.275 2.275 0 0 1 8.44 10.75c-.984 0-1.83-.619-2.145-1.496a.75.75 0 1 1 1.412-.508m7.122 0a.775.775 0 0 0 .733.504c.345 0 .63-.216.733-.504a.75.75 0 0 1 1.412.508 2.275 2.275 0 0 1-2.145 1.496c-.984 0-1.83-.619-2.145-1.496a.75.75 0 0 1 1.412-.508"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pensive;
