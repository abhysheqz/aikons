import React from "react";
const TimeHalfPass: React.FC<
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
        d="M12 1.25a.977.977 0 0 0 0 1.955 8.795 8.795 0 1 1 0 17.59.977.977 0 1 0 0 1.955c5.938 0 10.75-4.813 10.75-10.75S17.939 1.25 12 1.25M9.173 3.636a.977.977 0 0 0-.658-1.84q-.437.156-.857.347a.977.977 0 1 0 .809 1.78q.345-.157.706-.287M6.219 5.372a.977.977 0 0 0-1.289-1.47q-.365.32-.699.67a.977.977 0 1 0 1.413 1.35 9 9 0 0 1 .575-.55M4.11 8.1a.977.977 0 0 0-1.75-.87q-.3.601-.523 1.244a.977.977 0 1 0 1.846.642q.182-.524.428-1.016m-.891 3.36a.977.977 0 1 0-1.952-.111c-.024.419-.023.845.003 1.264a.977.977 0 1 0 1.95-.119 9 9 0 0 1-.001-1.034m.485 3.403a.977.977 0 0 0-1.842.655q.215.604.499 1.173a.977.977 0 0 0 1.75-.87q-.232-.466-.407-.958m1.867 3.06a.977.977 0 1 0-1.428 1.333q.393.421.83.8a.977.977 0 1 0 1.28-1.476 9 9 0 0 1-.682-.658m2.724 1.996a.977.977 0 0 0-.845 1.763q.634.305 1.31.529a.977.977 0 0 0 .616-1.856 9 9 0 0 1-1.081-.436"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12 5a1 1 0 0 1 1 1v3.708a2.5 2.5 0 0 1 0 4.584V16a1 1 0 1 1-2 0v-1.708a2.5 2.5 0 0 1 0-4.584V6a1 1 0 0 1 1-1"
      />
    </svg>
  );
};
export default TimeHalfPass;
