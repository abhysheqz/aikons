import React from "react";
const LaptopSettings: React.FC<
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
        d="M22.5 20.5h-21l2-4h17zM20.5 16.5V5A1.5 1.5 0 0 0 19 3.5H5A1.5 1.5 0 0 0 3.5 5v11.5"
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
export default LaptopSettings;
