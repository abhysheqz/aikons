import React from "react";
const SummationCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M9 7a1 1 0 0 0-.753 1.659L11.171 12l-2.924 3.342A1 1 0 0 0 9 17h6a1 1 0 0 0 1-1v-1.5a1 1 0 1 0-2 0v.5h-2.796l2.049-2.341a1 1 0 0 0 0-1.318L11.203 9H14v.5a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SummationCircle;
