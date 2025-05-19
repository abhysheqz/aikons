import React from "react";
const TimeQuarter_02: React.FC<
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
        d="M13 5v6h4v2h-6V5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m14.477 1.25.926.311q.605.205 1.18.481l.882.424-.847 1.761-.88-.423a8 8 0 0 0-.958-.39l-.926-.311zM1.25 12C1.25 6.063 6.063 1.25 12 1.25h.977v1.955H12A8.795 8.795 0 1 0 20.796 12v-.977h1.954V12c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12m17.204-8.87.732.648a12 12 0 0 1 1.05 1.05l.646.732-1.466 1.293-.646-.733a10 10 0 0 0-.877-.877l-.733-.647zm3.07 3.382.426.879q.279.574.484 1.175l.316.925-1.85.632-.315-.925a8 8 0 0 0-.394-.954l-.426-.88z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TimeQuarter_02;
