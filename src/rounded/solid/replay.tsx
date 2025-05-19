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
        d="M12 3.205A8.795 8.795 0 1 0 20.796 12a.977.977 0 1 1 1.954 0c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12 6.063 1.25 12 1.25c2.599 0 4.983.923 6.84 2.457v-.991a.977.977 0 0 1 1.956 0v3.42c0 .54-.438.978-.978.978h-3.42a.977.977 0 0 1 0-1.955h1.13A8.76 8.76 0 0 0 12 3.205"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.945 12.358c-.176.626-1.012 1.07-2.682 1.955-1.615.856-2.422 1.284-3.073 1.112a1.66 1.66 0 0 1-.712-.392C9 14.583 9 13.709 9 11.963c0-1.747 0-2.62.478-3.07.198-.186.443-.321.712-.393.65-.172 1.458.256 3.073 1.113 1.67.886 2.506 1.328 2.682 1.955.073.259.073.531 0 .79"
      />
    </svg>
  );
};
export default Replay;
