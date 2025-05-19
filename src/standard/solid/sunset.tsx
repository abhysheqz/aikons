import React from "react";
const Sunset: React.FC<
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
        d="M12.707 10.207a1 1 0 0 1-1.414 0l-2.5-2.5A1 1 0 0 1 9.5 6H11V3.5a1 1 0 1 1 2 0V6h1.5a1 1 0 0 1 .707 1.707zM19.207 9.293a1 1 0 0 1 0 1.414l-1.5 1.5a1 1 0 0 1-1.414-1.414l1.5-1.5a1 1 0 0 1 1.414 0m-14.415.003a1 1 0 0 1 1.414-.001l1.5 1.497a1 1 0 0 1-1.412 1.416l-1.5-1.498a1 1 0 0 1-.002-1.414M2 16.5a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m16 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1M22 20.5a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h18a1 1 0 0 1 1 1M7.25 16.5a4.75 4.75 0 1 1 9.5 0 .75.75 0 0 1-.75.75H8a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sunset;
