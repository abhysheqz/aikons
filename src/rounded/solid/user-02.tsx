import React from "react";
const User_02: React.FC<
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
        d="M12.5 3.25a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5m0 10c-1.879 0-3.64.386-5.121 1.062-1.479.674-2.129 2.222-2.129 3.658 0 .433 0 .904.043 1.227.048.356.16.731.47 1.04s.684.422 1.04.47c.323.043.72.043 1.152.043h9.09c.433 0 .83 0 1.152-.043.356-.048.731-.16 1.04-.47s.422-.684.47-1.04c.043-.323.043-.794.043-1.227 0-1.436-.65-2.984-2.129-3.658-1.482-.676-3.242-1.062-5.121-1.062"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default User_02;
