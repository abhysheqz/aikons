import React from "react";
const UserCheck_01: React.FC<
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
        d="M21.692 14.416a1 1 0 0 1-.608 1.277c-.534.189-1.15.596-1.803 1.168-.643.564-1.268 1.241-1.822 1.905a28 28 0 0 0-1.865 2.52 1 1 0 0 1-1.795-.225c-.267-.818-.664-1.297-.962-1.564a3 3 0 0 0-.456-.317 1 1 0 0 1 .72-1.866c.308.116.805.455 1.073.695.233.209.478.472.712.797.294-.398.646-.852 1.037-1.321.593-.712 1.292-1.472 2.039-2.127.736-.646 1.576-1.24 2.454-1.55a1 1 0 0 1 1.276.608"
      />
      <path
        fill="currentColor"
        d="M12.233 20.75a3.3 3.3 0 0 0-.421-.454 2.25 2.25 0 0 1 1.73-4.152c.284.107.872.458 1.247.75.438-.523.911-1.062 1.397-1.563a7.76 7.76 0 0 0-4.431-2.881A5.252 5.252 0 0 0 10 2.25a5.25 5.25 0 0 0-1.755 10.2A7.75 7.75 0 0 0 2.25 20c0 .414.336.75.75.75z"
      />
    </svg>
  );
};
export default UserCheck_01;
