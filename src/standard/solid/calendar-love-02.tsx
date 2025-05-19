import React from "react";
const CalendarLove_02: React.FC<
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
        d="M7.613 1.25c.538 0 .974.438.974.977v.978h6.826v-.978a.976.976 0 1 1 1.95 0v.978h1.462a2.93 2.93 0 0 1 2.925 2.931v13.682c0 1.62-1.31 2.932-2.925 2.932H5.175a2.93 2.93 0 0 1-2.925-2.932V6.136c0-1.619 1.31-2.931 2.925-2.931h1.463v-.978c0-.54.436-.977.974-.977M19.8 9.75H4.2v10.068c0 .54.436.977.975.977h13.65a.976.976 0 0 0 .975-.977z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.75 14.106c0-1.38 1.027-2.583 2.5-2.583.524 0 1.011.112 1.44.375q.165.103.31.226.144-.123.31-.226c.429-.263.916-.375 1.44-.375 1.473 0 2.5 1.203 2.5 2.583 0 1.636-1.1 2.87-2.024 3.63-.47.386-1.525.994-1.897 1.209l-.02.01a.75.75 0 0 1-.62 0l-.018-.01c-.372-.214-1.428-.823-1.897-1.21-.924-.758-2.024-1.992-2.024-3.629"
      />
    </svg>
  );
};
export default CalendarLove_02;
