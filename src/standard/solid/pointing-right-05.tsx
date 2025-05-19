import React from "react";
const PointingRight_05: React.FC<
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
        d="M19.117 1.076a1 1 0 0 1 1.09.217l2.5 2.5a1 1 0 0 1 0 1.414l-2.5 2.5A1 1 0 0 1 18.5 7V5.5H16a1 1 0 1 1 0-2h2.5V2a1 1 0 0 1 .617-.924"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.25 19.978H11.5a.45.45 0 0 1 0-.9h2.803c.58-.504.947-1.248.947-2.077v-.422H12.5a.45.45 0 0 1 0-.9h3.18A2.74 2.74 0 0 0 16.25 14v-.25c-.012-.137-.079-.452-.254-.62H13.5a.45.45 0 0 1 0-.9h7.93a1.321 1.321 0 1 0 0-2.642H10.392a.45.45 0 0 1-.319-.767l2.227-2.24a1.661 1.661 0 0 0-2.177-2.498L3.266 9.251H2a.75.75 0 0 0-.75.75v10c0 .414.336.75.75.75h1.237l1.199.959a4.75 4.75 0 0 0 2.967 1.04H11.5A2.75 2.75 0 0 0 14.25 20z"
      />
    </svg>
  );
};
export default PointingRight_05;
