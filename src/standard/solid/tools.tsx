import React from "react";
const Tools: React.FC<
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
        d="M5 10h2.5l6.5 6.5V19a2 2 0 0 0 2 2h2.276a.3.3 0 0 0 .212-.512L17 19v-2h2l1.488 1.488a.3.3 0 0 0 .512-.212V16a2 2 0 0 0-2-2h-2.5L10 7.5V5a2 2 0 0 0-2-2H5.724a.3.3 0 0 0-.212.512L7 5v2H5L3.512 5.512A.3.3 0 0 0 3 5.724V8a2 2 0 0 0 2 2"
      />
      <path
        fill="currentColor"
        d="m14.84 10.22-1.06-1.061L17.44 5.5l-.47-.47a.75.75 0 0 1 .145-1.173l2.5-1.5a.75.75 0 0 1 .916.113l1 1a.75.75 0 0 1 .113.916l-1.5 2.5a.75.75 0 0 1-1.174.144l-.47-.47zM11.72 16.34l-4.276 4.276a2.75 2.75 0 0 1-3.889 0l-.171-.171a2.75 2.75 0 0 1 0-3.89l4.275-4.275z"
      />
    </svg>
  );
};
export default Tools;
