import React from "react";
const Students: React.FC<
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
        d="M8.256 3.295a.75.75 0 0 0-.512 0l-5.5 2A.75.75 0 0 0 1.75 6v4a.75.75 0 0 0 1.5 0V7.325l1 .6v1.464c0 2.106 1.653 3.861 3.75 3.861s3.75-1.755 3.75-3.861V7.925l2.136-1.282a.75.75 0 0 0-.13-1.348zM8 11.75c-1.185 0-2.195-.977-2.248-2.257v-.75C6.133 8.64 6.885 8.5 8 8.5c1.114 0 1.866.14 2.248.243v.75C10.195 10.773 9.185 11.75 8 11.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.763 6.798a.75.75 0 0 0-.526 0l-4 1.5a.75.75 0 0 0-.098 1.36l1.43.786v.874a2.932 2.932 0 1 0 5.863 0v-.874l1.43-.787a.75.75 0 0 0-.099-1.36zM17.5 12.75c-.712 0-1.414-.527-1.414-1.201V11c.277-.06.728-.122 1.414-.122s1.136.061 1.413.122v.549c0 .693-.7 1.201-1.413 1.201"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.25 19A4.75 4.75 0 0 1 6 14.25h4A4.75 4.75 0 0 1 14.75 19 1.75 1.75 0 0 1 13 20.75H3A1.75 1.75 0 0 1 1.25 19M15.437 20.75H21A1.75 1.75 0 0 0 22.75 19 3.75 3.75 0 0 0 19 15.25h-3c-.41 0-.803.066-1.172.187A5.97 5.97 0 0 1 16 19c0 .653-.208 1.257-.563 1.75"
      />
    </svg>
  );
};
export default Students;
