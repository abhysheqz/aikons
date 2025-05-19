import React from "react";
const QrCode: React.FC<
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
        d="M11 13a2 2 0 0 1 2-2h7.5a1 1 0 1 1 0 2H13v1.5a1 1 0 1 1-2 0zm4 1a1 1 0 0 1 1 1v1.5h1a2 2 0 0 1 2 2 1 1 0 1 1-2 0h-1a2 2 0 0 1-2-2V15a1 1 0 0 1 1-1m2.5 1a1 1 0 0 1 1-1H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1.5a1 1 0 1 1 0-2H20v-4h-1.5a1 1 0 0 1-1-1M12 16.5a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m1.5 4.5a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1M2 12a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M12 2a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1M2 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zM2 16a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zM14 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default QrCode;
