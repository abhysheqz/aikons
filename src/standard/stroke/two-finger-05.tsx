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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.811 5.71a1.5 1.5 0 1 0-2.954-.522L7.5 14.5l-1.524-2.046a1.3 1.3 0 0 0-.194-.216 1.692 1.692 0 0 0-2.533 2.18c.055.09.114.178.164.272l2.743 5.208A3 3 0 0 0 8.81 21.5h7.712a3 3 0 0 0 2.946-2.433l1.512-7.856a1.5 1.5 0 1 0-2.955-.52m-5.214-4.982.347-1.97a1.5 1.5 0 0 1 2.955.522l-.868 4.924M12.81 5.709l-.781 4.432m3.215-.956-.26 1.477m.26-1.477a1.5 1.5 0 0 1 2.954.52l-.174.986m0 0-.086.492"
      />
    </svg>
  );
};
export default TwoFinger_05;
