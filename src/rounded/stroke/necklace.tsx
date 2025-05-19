import React from "react";
const Necklace: React.FC<
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
        strokeWidth={1.5}
        d="m10.542 12 .39-3.124c.091-.728.422-.876 1.11-.876s1.018.148 1.11.876l.39 3.124"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M8.284 12.612c1.336-.812 2.501-.485 3.201.036.287.214.43.32.515.32s.228-.106.515-.32c.7-.52 1.865-.848 3.2-.036 1.753 1.065 2.15 4.578-1.892 7.542-.77.564-1.155.846-1.823.846s-1.053-.282-1.822-.846c-4.042-2.964-3.646-6.477-1.894-7.542Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.006 3c-.097 1.578.97 5.043 6.047 6.662M21.994 3c.097 1.578-.97 5.043-6.047 6.662"
      />
    </svg>
  );
};
export default Necklace;
