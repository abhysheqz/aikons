import React from "react";
const Medal_06: React.FC<
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
        d="M12 8.25a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5m0 5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m10.408 9.983-1.812.846L4.25 1.25h2.196zM13.892 9.525l-1.838.788-3.77-9.063h2.165z"
      />
      <path
        fill="currentColor"
        d="m19.75 1.25-4.346 9.58-1.813-.847 3.963-8.733zM12.908 4.289 14.036 7l2.155-5.75h-2.137z"
      />
    </svg>
  );
};
export default Medal_06;
