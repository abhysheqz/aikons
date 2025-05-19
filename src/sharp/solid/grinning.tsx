import React from "react";
const Grinning: React.FC<
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
        d="m19.518 2-1.801 1.785a2.48 2.48 0 0 0 .017 3.504 2.53 2.53 0 0 0 3.534-.016 2.464 2.464 0 0 0 0-3.504z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12c0-1.325-.24-2.594-.678-3.766a3.78 3.78 0 0 1-5.21-.05l-.008-.007a3.73 3.73 0 0 1-.025-5.272l.008-.008.33-.326A10.7 10.7 0 0 0 12 1.25m0 15c1.39 0 2.624-.666 3.4-1.7l1.2.9a5.74 5.74 0 0 1-4.6 2.3 5.74 5.74 0 0 1-4.6-2.3l1.2-.9a4.24 4.24 0 0 0 3.4 1.7M7.478 9.54l.96.93-.977 1.009 1.077 1.044 2.022-2.087L8.521 8.46zm9.043 0L15.478 8.46l-2.04 1.974 2.023 2.087 1.077-1.044-.978-1.01z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Grinning;
