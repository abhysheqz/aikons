import React from "react";
const ComputerSettings: React.FC<
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
        d="M14 21h2m-2 0a1.5 1.5 0 0 1-1.5-1.5V17H12m2 4h-4m0 0H8m2 0a1.5 1.5 0 0 0 1.5-1.5V17h.5m0 0v4M16 3H8c-2.828 0-4.243 0-5.121.879C2 4.757 2 6.172 2 9v2c0 2.828 0 4.243.879 5.121C3.757 17 5.172 17 8 17h8c2.828 0 4.243 0 5.121-.879C22 15.243 22 13.828 22 11V9c0-2.828 0-4.243-.879-5.121C20.243 3 18.828 3 16 3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 12v1.5m0-1.5a2 2 0 0 0 1.728-.992M12 12a2 2 0 0 1-1.728-.992M12 8V6.5M12 8a2 2 0 0 1 1.728.992M12 8a2 2 0 0 0-1.728.992M15 8.25l-1.272.742M9 11.75l1.272-.742M15 11.75l-1.272-.742M9 8.25l1.272.742m3.456 2.016A2 2 0 0 0 14 10c0-.368-.1-.712-.272-1.008m-3.456 0A2 2 0 0 0 10 10c0 .368.1.712.272 1.008"
      />
    </svg>
  );
};
export default ComputerSettings;
