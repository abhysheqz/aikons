import React from "react";
const FileStar: React.FC<
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
        d="M17.807 16.32 16 13.75l-1.748 2.57-3.002.871 1.926 2.487-.103 3.072L16 21.55l2.988 1.2-.098-3.086 1.86-2.473z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m3.251 1.25-.001 21.5h8.573l.089-2.663-2.775-3.583 4.335-1.258 2.511-3.693 2.596 3.693 2.171.642V8.63L13.36 1.25zm9.312 1.955 6.236 6.255h-6.236z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileStar;
