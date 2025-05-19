import React from "react";
const Briefcase_06: React.FC<
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
        d="M7.5 2.75a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v3.5h-2v-2.5h-5v2.5h-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.5 5.25a.75.75 0 0 0-.75.75v4.628l.086.164c1.728 3.286 5.662 4.702 9.164 4.926V17h2v-1.282c3.502-.224 7.436-1.64 9.164-4.926l.086-.164V6a.75.75 0 0 0-.75-.75z"
      />
      <path
        fill="currentColor"
        d="M21.25 14.251c-1.93 1.62-4.425 2.474-6.75 2.816V18.5h-5v-1.433c-2.325-.342-4.82-1.196-6.75-2.816V21.5c0 .414.336.75.75.75h17a.75.75 0 0 0 .75-.75z"
      />
    </svg>
  );
};
export default Briefcase_06;
