import React from "react";
const MoreOrLessCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M9.17 7.837 9.04 8h7.46a1 1 0 0 1 0 2H9.128c-.459 0-.901 0-1.241-.046-.305-.041-.986-.172-1.28-.853a1.23 1.23 0 0 1-.051-.786 2 2 0 0 1 .155-.41c.108-.222.254-.448.382-.632.129-.187.427-.57.532-.703l.005-.008a1 1 0 0 1 1.54 1.276M6.5 12a1 1 0 0 1 1-1h9a1 1 0 0 1 0 2h-9a1 1 0 0 1-1-1m1 4h7.46l-.13.162a1 1 0 0 0 1.54 1.276l.006-.007c.104-.134.402-.517.532-.703.127-.184.273-.41.382-.632a2 2 0 0 0 .154-.41 1.23 1.23 0 0 0-.051-.786c-.294-.682-.975-.812-1.28-.854-.34-.046-.782-.046-1.24-.046H7.5a1 1 0 1 0 0 2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoreOrLessCircle;
