import React from "react";
const Dress_05: React.FC<
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
        d="M8.377 1.26a.75.75 0 0 1 .611.17L12 4.013l3.012-2.581a.75.75 0 0 1 .611-.17l3 .5a.75.75 0 0 1 .406.208l3.499 3.486a.75.75 0 0 1 .082.966L20.11 9.935a.75.75 0 0 1-1.061.165l-1.256-.942a7 7 0 0 0-.04.736c-.006 1.032.176 2.075.348 3.065l.036.204 1.723 7.971-.563.246c-2.115.922-4.722 1.37-7.3 1.37-2.576 0-5.184-.448-7.3-1.37l-.563-.246 1.726-7.971.036-.204c.172-.99.354-2.033.348-3.065a7 7 0 0 0-.04-.736L4.95 10.1a.75.75 0 0 1-1.061-.165L1.39 6.42a.75.75 0 0 1 .082-.966l3.499-3.486a.75.75 0 0 1 .406-.209z"
      />
    </svg>
  );
};
export default Dress_05;
