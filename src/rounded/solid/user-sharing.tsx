import React from "react";
const UserSharing: React.FC<
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
        d="M3.25 10.929C3.25 6.136 7.168 2.25 12 2.25c4.833 0 8.75 3.886 8.75 8.679 0 1.579-.426 3.062-1.171 4.34a.977.977 0 0 1-1.329.351.96.96 0 0 1-.354-1.317c.578-.992.91-2.143.91-3.374 0-3.728-3.047-6.75-6.806-6.75S5.194 7.2 5.194 10.929c0 1.23.332 2.382.91 3.374a.96.96 0 0 1-.354 1.317.977.977 0 0 1-1.329-.351 8.6 8.6 0 0 1-1.171-4.34"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.403 14.44A6.75 6.75 0 0 0 5.25 21c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75 6.75 6.75 0 0 0-5.153-6.56A4.251 4.251 0 0 0 12 6.25a4.25 4.25 0 0 0-1.597 8.19"
      />
    </svg>
  );
};
export default UserSharing;
