import React from "react";
const UserStar_02: React.FC<
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
        d="M18.75 8.25a.75.75 0 0 1 .676.424l.796 1.652 1.838.149a.75.75 0 0 1 .459 1.289l-1.325 1.268.38 1.815a.75.75 0 0 1-1.087.815l-1.737-.924-1.737.924a.75.75 0 0 1-1.086-.815l.379-1.815-1.325-1.268a.75.75 0 0 1 .459-1.29l1.839-.148.795-1.652a.75.75 0 0 1 .676-.424"
      />
      <path
        fill="currentColor"
        d="M7.245 12.95A7.75 7.75 0 0 0 1.25 20.5c0 .414.336.75.75.75h14a.75.75 0 0 0 .75-.75 7.75 7.75 0 0 0-5.995-7.55A5.252 5.252 0 0 0 9 2.75a5.25 5.25 0 0 0-1.755 10.2"
      />
    </svg>
  );
};
export default UserStar_02;
