import React from "react";
const Relieved_01: React.FC<
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m7.19-2.75a.775.775 0 0 1-.734-.504.75.75 0 1 0-1.412.508A2.275 2.275 0 0 0 8.44 10.75c.985 0 1.83-.619 2.145-1.496a.75.75 0 1 0-1.411-.508.775.775 0 0 1-.734.504m7.121 0a.775.775 0 0 1-.733-.504.75.75 0 1 0-1.412.508 2.275 2.275 0 0 0 2.145 1.496c.984 0 1.83-.619 2.145-1.496a.75.75 0 0 0-1.412-.508.775.775 0 0 1-.733.504M8.6 14.55a.75.75 0 0 0-1.2.9 5.74 5.74 0 0 0 4.6 2.3 5.74 5.74 0 0 0 4.6-2.3.75.75 0 1 0-1.2-.9 4.24 4.24 0 0 1-3.4 1.7 4.24 4.24 0 0 1-3.4-1.7"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Relieved_01;
