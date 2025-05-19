import React from "react";
const UserStar_02: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 8.5a5 5 0 1 0-10 0 5 5 0 0 0 10 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 20.5a7 7 0 1 0-14 0M19.518 8.933l.528 1.065c.072.148.264.29.426.317l.957.16c.612.104.756.551.315.993l-.744.75a.66.66 0 0 0-.156.547l.213.929c.168.735-.219 1.019-.864.635l-.897-.535a.64.64 0 0 0-.594 0l-.897.535c-.641.384-1.031.097-.863-.635l.213-.929a.66.66 0 0 0-.156-.547l-.744-.75c-.438-.442-.297-.89.315-.992l.956-.16a.65.65 0 0 0 .424-.318l.527-1.065c.288-.577.756-.577 1.041 0"
      />
    </svg>
  );
};
export default UserStar_02;
