import React from "react";
const Medal_04: React.FC<
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
        d="M12 11.25a.75.75 0 0 1 .674.421l1.303 2.673 3.107.348a.75.75 0 0 1 .41 1.31l-2.27 1.986.6 2.858a.75.75 0 0 1-1.085.817L12 20.212l-2.74 1.45a.75.75 0 0 1-1.084-.816l.6-2.858-2.27-1.986a.75.75 0 0 1 .41-1.31l3.107-.348 1.303-2.673A.75.75 0 0 1 12 11.25"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 2.25H3.5a.75.75 0 0 0-.75.75v5c0 .29.168.555.43.679l8.5 4a.75.75 0 0 0 .64 0l8.5-4A.75.75 0 0 0 21.25 8V3a.75.75 0 0 0-.75-.75H13v4.01a1 1 0 1 1-2 0V2.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Medal_04;
