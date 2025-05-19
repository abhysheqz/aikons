import React from "react";
const Replay: React.FC<
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
        d="M12 3.205A8.795 8.795 0 1 0 20.796 12v-.977h1.954V12c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12 6.063 1.25 12 1.25c2.599 0 4.983.923 6.84 2.457V1.74h1.956v4.005l.009.01-.01.009v1.35H15.42V5.16h2.109A8.76 8.76 0 0 0 12 3.205"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.356 8.362a.75.75 0 0 1 .73-.033l6 3a.75.75 0 0 1 0 1.342l-6 3A.75.75 0 0 1 9 15V9a.75.75 0 0 1 .356-.638"
      />
    </svg>
  );
};
export default Replay;
