import React from "react";
const CarSignal: React.FC<
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
        d="M17 1.25a.75.75 0 0 0 0 1.5A4.25 4.25 0 0 1 21.25 7a.75.75 0 0 0 1.5 0A5.75 5.75 0 0 0 17 1.25M16.25 5a.75.75 0 0 1 .75-.75A2.75 2.75 0 0 1 19.75 7a.75.75 0 1 1-1.5 0c0-.69-.56-1.25-1.25-1.25a.75.75 0 0 1-.75-.75m3.047 6.34-1.581-3.478a2.75 2.75 0 0 0-2.504-1.612H7.788a2.75 2.75 0 0 0-2.504 1.612l-1.58 3.478-1.254-.94a.75.75 0 1 0-.9 1.2l1.432 1.074-1.27 1.906a2.75 2.75 0 0 0-.462 1.526v5.644a1 1 0 0 0 1 1H4a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1a1 1 0 0 0 1 1h1.75a1 1 0 0 0 1-1v-5.644a2.75 2.75 0 0 0-.462-1.526l-1.27-1.906L21.45 11.6a.75.75 0 1 0-.9-1.2zM6.649 8.483a1.25 1.25 0 0 1 1.138-.733h7.424c.49 0 .936.287 1.138.733l1.595 3.508-1.037.259H6.092l-1.037-.26zM17 15a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0V16a1 1 0 0 1 1-1M7 16a1 1 0 1 0-2 0v.01a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CarSignal;
