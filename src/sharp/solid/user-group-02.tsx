import React from "react";
const UserGroup_02: React.FC<
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
        d="M6.5 3.75a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m2.68 10.757a8 8 0 0 0-1.495.743H1.75v-2.513l.165-.206C3.022 11.148 4.657 10.25 6.5 10.25q.537.001 1.047.098-.047.32-.047.652c0 1.418.655 2.682 1.68 3.507M14.75 6.5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M12 15.25a6.79 6.79 0 0 0-5.057 2.248l-.193.214v2.538h10.5v-2.538l-.193-.214A6.79 6.79 0 0 0 12 15.25M8.75 11a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0m6.07 3.507a8 8 0 0 1 1.495.743h5.935v-2.513l-.165-.206c-1.107-1.383-2.742-2.281-4.585-2.281q-.537.001-1.047.098.047.32.047.652a4.5 4.5 0 0 1-1.68 3.507"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UserGroup_02;
