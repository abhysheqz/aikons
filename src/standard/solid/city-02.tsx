import React from "react";
const City_02: React.FC<
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
        d="M1 21.5a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 12.5a2 2 0 0 1 2-2h3a1 1 0 1 1 0 2H4v9a1 1 0 1 1-2 0zM16 11.5a1 1 0 0 1 1-1h3a2 2 0 0 1 2 2v9a1 1 0 1 1-2 0v-9h-3a1 1 0 0 1-1-1M12 17.5a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.25 3.5c0-.966.784-1.75 1.75-1.75h8c.966 0 1.75.784 1.75 1.75v17A1.75 1.75 0 0 1 16 22.25h-1.825q.123-.354.125-.75v-3a2.3 2.3 0 1 0-4.6 0v3q.002.396.125.75H8a1.75 1.75 0 0 1-1.75-1.75zM11 5.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zm0 3.5a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zm0 3.5a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default City_02;
