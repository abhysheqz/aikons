import React from "react";
const UserUnlock_01: React.FC<
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
        d="M12.502 20.75v-6.86h1.752l.002-.011a7.7 7.7 0 0 0-3-1.43A5.252 5.252 0 0 0 9.503 2.25a5.25 5.25 0 0 0-1.755 10.2A7.75 7.75 0 0 0 1.752 20v.75z"
      />
      <path
        fill="currentColor"
        d="M17.99 13.248c-.554 0-1.002.449-1.002 1.002v.89h5.26v6.608h-8.496V15.14h1.736v-.89a2.502 2.502 0 0 1 4.271-1.77l.53.53-1.06 1.061-.53-.53a1 1 0 0 0-.709-.294"
      />
    </svg>
  );
};
export default UserUnlock_01;
