import React from "react";
const SolarPanel_05: React.FC<
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
        d="M7.235 10.125a1.75 1.75 0 0 0-1.67 1.228l-.788 2.522H11v-3.75zM18.435 11.353a1.75 1.75 0 0 0-1.67-1.228H13v3.75h6.223zM18.64 19.625a1.75 1.75 0 0 0 1.67-2.272l-.462-1.478H13v3.75zM3.69 17.353a1.75 1.75 0 0 0 1.67 2.272H11v-3.75H4.152zM8.25 7.875a3.75 3.75 0 0 1 7.5 0v.75h-7.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.125a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75m-5.03 1.72a.75.75 0 0 1 1.06 0l.5.5a.75.75 0 0 1-1.06 1.06l-.5-.5a.75.75 0 0 1 0-1.06m10.06 0a.75.75 0 0 1 0 1.06l-.5.5a.75.75 0 1 1-1.061-1.06l.5-.5a.75.75 0 0 1 1.06 0M5.25 7.875a.75.75 0 0 1 .75-.75h.5a.75.75 0 1 1 0 1.5H6a.75.75 0 0 1-.75-.75m11.5 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11 19.625v1.25h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-1.25z"
      />
    </svg>
  );
};
export default SolarPanel_05;
