import React from "react";
const PenTool_02: React.FC<
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
        d="M6.385 2.908A1.746 1.746 0 0 1 8.118 1h7.764c1.024 0 1.826.884 1.733 1.908L17.335 6H6.666zM6.541 7.5H17.46l2.329 4.294c.341.63.266 1.407-.191 1.958L12.75 22.5v-8.083c.465-.104.89-.307 1.231-.592a.75.75 0 1 0-.962-1.15c-.207.172-.545.312-.962.324a1 1 0 0 0-.114 0c-.417-.012-.755-.152-.962-.324a.75.75 0 0 0-.962 1.15c.34.285.766.488 1.231.592V22.5l-6.847-8.748a1.76 1.76 0 0 1-.19-1.958z"
      />
    </svg>
  );
};
export default PenTool_02;
