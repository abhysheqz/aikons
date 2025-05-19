import React from "react";
const Umbrella: React.FC<
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
        d="M12 3.5V2M12 3.5c-.94 0-4.472 3.793-5.028 8.704M12 3.5c.94 0 4.472 3.793 5.028 8.704M12 3.5c4.937 0 9.055 3.436 10 8-1.388 1.2-3.893.97-4.972.704M12 3.5c-4.937 0-9.055 3.436-10 8 1.388 1.2 3.893.97 4.972.704m0 0A10.3 10.3 0 0 0 12 13.5a10.3 10.3 0 0 0 5.028-1.296"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 13.5v7a1.5 1.5 0 0 1-3 0V20"
      />
    </svg>
  );
};
export default Umbrella;
