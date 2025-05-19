import React from "react";
const Alms: React.FC<
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
        d="M22.75 14.001a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.361.093l-2.331 1.282H15.5c-1.238 0-2.264.633-2.814 1.48L16 17.71l2.763-.92.475 1.422-3 1a.75.75 0 0 1-.475 0l-4.559-2.231v-1.37l-2.177-.725a2.75 2.75 0 0 0-3.423 1.587l-.3.75a.75.75 0 0 0 .362.949l9 4.5a.75.75 0 0 0 .54.05l6.999-1.98a.75.75 0 0 0 .545-.721z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.299 3.311a5.251 5.251 0 1 1-5.65 7.203l-2.314 1.158A.75.75 0 0 1 6 11.75H1.25v-8H2c.352 0 .773-.113 1.277-.33.503-.216 1.027-.509 1.596-.826l.007-.003c.551-.308 1.145-.639 1.734-.89.59-.252 1.232-.452 1.886-.452h.19c.369-.003.746-.006 1.194.085.525.107 1.125.334 2.021.77l.01.004zm-2.7 2.442a3.34 3.34 0 1 1-.946 4.498h.847a2.25 2.25 0 0 0 .1-4.498"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Alms;
