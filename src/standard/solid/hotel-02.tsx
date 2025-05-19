import React from "react";
const Hotel_02: React.FC<
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
        d="M6.083 6a6.002 6.002 0 0 1 11.834 0H20a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-4.993v-4.999a3.001 3.001 0 0 0-6.002 0V23H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm6.924 12.001V23h-2.002v-4.999a1.001 1.001 0 1 1 2.002 0M6 10.25a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zm0 3.5a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM16.25 11a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m-5-6a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-1.241h1.497V12.5a.75.75 0 1 0 1.5 0v-4a.75.75 0 0 0-1.5 0v1.259H11.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.293 2.293A1 1 0 0 1 4 2h5a1 1 0 0 1 0 2H4.443a8 8 0 0 0-.924 1.447A8 8 0 0 0 3.27 6H7a1 1 0 0 1 0 2H2a1 1 0 0 1-1-1c0-.743.34-1.667.73-2.447.407-.812.964-1.661 1.563-2.26M15 2h5a1 1 0 0 1 .707.293c.599.599 1.156 1.448 1.562 2.26.39.78.731 1.704.731 2.447a1 1 0 0 1-1 1h-5a1 1 0 1 1 0-2h3.731a8 8 0 0 0-.25-.553c-.27-.54-.6-1.056-.924-1.447H15a1 1 0 1 1 0-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Hotel_02;
