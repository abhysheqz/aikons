import React from "react";
const TwoFinger_05: React.FC<
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
        strokeWidth={1.5}
        d="M12.811 5.71a1.5 1.5 0 1 0-2.954-.522L9.075 9.62l-.928 5.078-2.258-2.361a1.692 1.692 0 0 0-2.55 2.212l4.46 5.477a4 4 0 0 0 3.102 1.474h4.795a4 4 0 0 0 3.928-3.244l1.356-7.045a1.5 1.5 0 1 0-2.955-.52m-5.214-4.982.347-1.97a1.5 1.5 0 0 1 2.955.522l-.868 4.924M12.81 5.709l-.781 4.432m3.215-.956-.26 1.477m.26-1.477a1.5 1.5 0 0 1 2.954.52l-.174.986m0 0-.086.492"
      />
    </svg>
  );
};
export default TwoFinger_05;
