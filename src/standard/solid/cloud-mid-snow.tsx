import React from "react";
const CloudMidSnow: React.FC<
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
        d="M12 14a1 1 0 0 1 1 1v1.234l.986-.592a1 1 0 0 1 1.028 1.716l-1.07.642 1.07.642a1 1 0 0 1-1.029 1.716L13 19.766V21a1 1 0 1 1-2 0v-1.234l-.985.592a1 1 0 0 1-1.03-1.716L10.057 18l-1.07-.642a1 1 0 0 1 1.028-1.716l.986.592V15a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.25 13a5.75 5.75 0 0 1 4.603-5.635 6.252 6.252 0 0 1 12.394.938A5.251 5.251 0 0 1 17.5 18.75h-.615A2.5 2.5 0 0 0 16.5 18a2.501 2.501 0 0 0-2.206-3.992 2.5 2.5 0 0 0-4.59 0A2.5 2.5 0 0 0 7.499 18a2.5 2.5 0 0 0-.384.75H7A5.75 5.75 0 0 1 1.25 13"
      />
    </svg>
  );
};
export default CloudMidSnow;
