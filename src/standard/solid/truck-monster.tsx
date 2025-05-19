import React from "react";
const TruckMonster: React.FC<
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
        d="M8.262 3.326A1 1 0 0 1 9 3h5.5a2 2 0 0 1 1.6.8l2.54 3.386 2.14.918a3 3 0 0 1 1.81 2.527l.407 5.292A1 1 0 0 1 22 17h-1.027a4.5 4.5 0 0 1-8.945 0h-1.056a4.5 4.5 0 0 1-8.945 0H2a1 1 0 0 1-1-1V9.5a1 1 0 0 1 1-1h6.405l-.4-4.41a1 1 0 0 1 .257-.764M14.5 5l1.688 2.25H12.78a.25.25 0 0 1-.243-.19L12.023 5zM4 16.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0M16.5 14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M12 9.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.5 5a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2h-1a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TruckMonster;
