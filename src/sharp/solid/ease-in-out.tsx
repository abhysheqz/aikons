import React from "react";
const EaseInOut: React.FC<
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
        d="M9.347 18.176C7.81 19.85 5.809 21 3 21v-2c2.164 0 3.655-.85 4.873-2.176 1.265-1.378 2.212-3.243 3.234-5.274l.035-.069c.981-1.95 2.04-4.054 3.511-5.657C16.19 4.15 18.191 3 21 3v2c-2.164 0-3.655.85-4.873 2.176-1.265 1.378-2.212 3.243-3.234 5.274l-.035.069c-.981 1.95-2.04 4.054-3.511 5.657"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EaseInOut;
