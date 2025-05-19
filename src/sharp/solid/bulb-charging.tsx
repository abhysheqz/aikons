import React from "react";
const BulbCharging: React.FC<
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
        d="M12 3.194c-3.768 0-6.806 3.02-6.806 6.724 0 1.267.354 2.45.97 3.461l-1.661 1.01A8.57 8.57 0 0 1 3.25 9.92c0-4.797 3.927-8.67 8.75-8.67s8.75 3.873 8.75 8.67a8.57 8.57 0 0 1-1.253 4.47l-1.66-1.01c.615-1.01.969-2.194.969-3.46 0-3.705-3.038-6.725-6.806-6.725"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7 15.25a.75.75 0 0 0-.712.987l.671 2.013h10.082l.67-2.013A.75.75 0 0 0 17 15.25zM9.29 22.237l-.83-2.487h7.081l-.829 2.487a.75.75 0 0 1-.711.513h-4a.75.75 0 0 1-.712-.513"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m11.632 5.004 1.737.992L12.224 8h3l-2.855 4.996-1.737-.992L11.778 10h-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BulbCharging;
