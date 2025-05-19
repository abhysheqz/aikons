import React from "react";
const TouchInteraction_03: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.496 7.997H3V2h16.983v5.997h-3.996"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.39 21.999v-1.303l-4-5.397-.067-.085a1.52 1.52 0 0 1-.333-1.193c.083-.68.484-1.26 1.173-1.356.404-.056.953.056 1.324.378l1.91 1.904-.027-1.464V6.43c0-.735.577-1.429 1.324-1.429s1.352.595 1.352 1.33v4.007m2.647 3.684-.017-2.176a2.7 2.7 0 0 0-.094-.646m0 0c-.099-.312-.31-.575-.791-.736a1 1 0 0 0-.225-.043l-1.017-.083h-.503m2.536.862 1.453.072c.772 0 1.282.669 1.296 1.358m0 1.758v-1.758m0 0h1.53c.76.107 1.124.787 1.124 1.494l.02 2.048c-.029.579-.009 1.535-.225 2.218-.046.144-.09.435-.313.698l-1.252 1.607v1.294m-6.169-11.65v3.145"
      />
    </svg>
  );
};
export default TouchInteraction_03;
