import React from "react";
const GoogleDrive: React.FC<
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
        d="M8.3 2.988 1.8 14.032c-.27.46-.406.69-.414.945s.112.493.352.97l2.531 5.019 7.27-12.344.036-.054zM9.616 2.25h4.895c.558 0 .837 0 1.068.132.23.132.372.373.656.854l6.48 11.014h-6.052zM22.748 15.75H9.168l-.072-.004L5.56 21.75h12.93c.6 0 .9 0 1.14-.148.242-.149.377-.416.646-.951zM9.978 14.25l2.47-4.196 2.465 4.196z"
      />
    </svg>
  );
};
export default GoogleDrive;
