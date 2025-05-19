import React from "react";
const EntranceStairs: React.FC<
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
        d="M12 1.25A8.75 8.75 0 0 0 3.25 10v10A2.75 2.75 0 0 0 6 22.75h12A2.75 2.75 0 0 0 20.75 20V10A8.75 8.75 0 0 0 12 1.25m7.25 12h-3.5V11a.25.25 0 0 1 .25-.25h3.25zm-7.5 4h7.5v-2.5H12a.25.25 0 0 0-.25.25zm-4 4H18c.69 0 1.25-.56 1.25-1.25v-1.25H8a.25.25 0 0 0-.25.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EntranceStairs;
