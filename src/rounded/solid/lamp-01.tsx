import React from "react";
const Lamp_01: React.FC<
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
        d="M12 17a4 4 0 0 1-4-4h2a2 2 0 1 0 4 0h2a4 4 0 0 1-4 4"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5 12a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2h-.07a7.001 7.001 0 0 0-13.86 0z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1M9.8 18.4a1 1 0 0 1-.2 1.4l-2 1.5a1 1 0 0 1-1.2-1.6l2-1.5a1 1 0 0 1 1.4.2m4.4 0a1 1 0 0 1 1.4-.2l2 1.5a1 1 0 0 1-1.2 1.6l-2-1.5a1 1 0 0 1-.2-1.4M12 19a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Lamp_01;
