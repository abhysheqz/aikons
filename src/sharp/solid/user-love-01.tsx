import React from "react";
const UserLove_01: React.FC<
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
        d="M12.75 16.639c0-1.534 1.119-2.889 2.75-2.889.585 0 1.125.129 1.595.423q.22.138.405.312.185-.174.405-.312c.47-.294 1.01-.423 1.595-.423 1.631 0 2.75 1.355 2.75 2.889 0 1.845-1.2 2.98-2.25 3.861-.54.454-2 1.5-2.5 1.75-.5-.25-1.96-1.296-2.5-1.75-1.05-.881-2.25-2.016-2.25-3.861"
      />
      <path
        fill="currentColor"
        d="M11.5 16.639c0-1.51.802-2.974 2.146-3.688a7.7 7.7 0 0 0-2.391-1.001A5.252 5.252 0 0 0 9.5 1.75a5.25 5.25 0 0 0-1.755 10.2A7.75 7.75 0 0 0 1.75 19.5v.75h11.04c-.71-.938-1.29-2.148-1.29-3.611"
      />
    </svg>
  );
};
export default UserLove_01;
