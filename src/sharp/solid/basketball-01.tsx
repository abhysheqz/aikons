import React from "react";
const Basketball_01: React.FC<
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
        d="M12.367 1.256c.145 2.983-1.057 5.785-3.04 7.83a17.1 17.1 0 0 0-6.669-2.409 10.75 10.75 0 0 1 9.71-5.42M13.875 1.413c.092 3.239-1.189 6.269-3.294 8.53a17.3 17.3 0 0 1 3.476 3.477c2.262-2.106 5.292-3.387 8.53-3.294a10.76 10.76 0 0 0-8.712-8.713M22.744 11.633c-2.983-.144-5.785 1.058-7.83 3.042a17.1 17.1 0 0 1 2.409 6.667 10.75 10.75 0 0 0 5.42-9.71M15.896 22.023a15.6 15.6 0 0 0-2.03-6.18c-1.493 1.924-2.357 4.342-2.232 6.901q.182.006.366.006c1.374 0 2.688-.258 3.896-.727M10.127 22.588c-.088-3.03 1.023-5.866 2.88-8.066a15.8 15.8 0 0 0-3.529-3.528c-2.199 1.857-5.035 2.968-8.065 2.88a10.76 10.76 0 0 0 8.714 8.713M1.256 12.368c2.56.124 4.978-.74 6.901-2.234a15.6 15.6 0 0 0-6.18-2.03 10.7 10.7 0 0 0-.72 4.264"
      />
    </svg>
  );
};
export default Basketball_01;
