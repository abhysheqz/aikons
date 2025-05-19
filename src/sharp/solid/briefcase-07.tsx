import React from "react";
const Briefcase_07: React.FC<
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
        d="M2.75 21.5V15h1.5v5.75h15.5V15h1.5v6.5a.75.75 0 0 1-.75.75h-17a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.5 21.25v-6.5h2v5.5h15v-5.5h2v6.5a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1M7.5 2.75a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v3.5h-2v-2.5h-5v2.5h-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.5 5.25a.75.75 0 0 0-.75.75v4.628l.086.164c1.728 3.286 5.662 4.702 9.164 4.926V17h2v-1.282c3.502-.224 7.436-1.64 9.164-4.926l.086-.164V6a.75.75 0 0 0-.75-.75z"
      />
    </svg>
  );
};
export default Briefcase_07;
