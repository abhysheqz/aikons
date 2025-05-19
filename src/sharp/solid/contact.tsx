import React from "react";
const Contact: React.FC<
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
        d="M2.75 4.75A.75.75 0 0 1 3.5 4h17a.75.75 0 0 1 .75.75v17a.75.75 0 0 1-.75.75h-17a.75.75 0 0 1-.75-.75zm6.5 5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M12 14c-2.592 0-4.75 1.85-4.75 4.75 0 .414.336.75.75.75h8a.75.75 0 0 0 .75-.75c0-2.9-2.158-4.75-4.75-4.75M9 1.5V4H7V1.5zM17 1.5V4h-2V1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Contact;
