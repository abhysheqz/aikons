import React from "react";
const Podium: React.FC<
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
        d="M7 1.25h2v2H7.781l-.81 3.243-1.94-.486 1-4A1 1 0 0 1 7 1.25m9.22 2H15v-2h2a1 1 0 0 1 .97.758l1 4-1.94.485z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4 5.25a.75.75 0 0 0-.737.888l1.5 8a.75.75 0 0 0 .737.612h3.332l.33 3H8.006l-1.694 3.955A.75.75 0 0 0 7 22.75h10.002a.75.75 0 0 0 .689-1.046l-1.697-3.954h-1.157l.33-3H18.5a.75.75 0 0 0 .737-.612l1.5-8A.75.75 0 0 0 20 5.25z"
      />
    </svg>
  );
};
export default Podium;
