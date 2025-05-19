import React from "react";
const Constellation: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM20 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM11 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM15 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM14.298 5.873l-1.595 4.254m.418-5.443L5.88 7.316m5.872 6.669-.504 4.03m2.541-5.12 4.422 2.21m-.04 1.707-5.343 2.375"
      />
    </svg>
  );
};
export default Constellation;
