import React from "react";
const Radar_01: React.FC<
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
        d="M6.819 6.818a7.32 7.32 0 0 1 6.31-2.06l-.3 1.931a5.375 5.375 0 1 0 2.973 9.112l1.382 1.382A7.33 7.33 0 0 1 6.82 6.818"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3.205A8.795 8.795 0 1 0 20.796 12a8.8 8.8 0 0 0-.732-3.518l1.791-.782c.576 1.318.895 2.773.895 4.3 0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12 6.063 1.25 12 1.25a10.72 10.72 0 0 1 7.601 3.149l.691.69-7.601 7.602-1.382-1.382 6.181-6.181A8.76 8.76 0 0 0 12 3.205"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Radar_01;
