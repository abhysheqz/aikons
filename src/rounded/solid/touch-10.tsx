import React from "react";
const Touch_10: React.FC<
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
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12v1a1 1 0 1 0 2 0v-1a8 8 0 1 1 16 0v1a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 5.25a6.25 6.25 0 0 0-6.25 6.25v7.545c0 .433 0 .83.043 1.152.048.356.16.731.47 1.04s.684.422 1.04.47c.323.043.72.043 1.152.043h7.09c.433 0 .83 0 1.152-.043.356-.048.731-.16 1.04-.47s.422-.684.47-1.04c.043-.323.043-.72.043-1.152V11.5A6.25 6.25 0 0 0 12 5.25m0 3a3.25 3.25 0 0 1 3.25 3.25v1.25a2 2 0 0 1-2 2h-2.5a2 2 0 0 1-2-2V11.5A3.25 3.25 0 0 1 12 8.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Touch_10;
