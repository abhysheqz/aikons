import React from "react";
const FaceId: React.FC<
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
        d="M12 5.5c-1.808 0-3.273 1.71-3.273 3.818 0 1.413.658 2.647 1.636 3.308v1.6l-3.788 1.11L6 17.5h12l-.516-2.164-3.848-1.11v-1.6c.978-.66 1.636-1.895 1.636-3.308C15.272 7.21 13.807 5.5 12 5.5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.75 1.75h7.81v1.952H3.702V9.56H1.75zm12.69 0h7.81v7.81h-1.952V3.702H14.44zM3.703 14.44v5.858H9.56v1.952H1.75v-7.81zm18.548 0v7.81h-7.81v-1.952h5.858V14.44z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FaceId;
