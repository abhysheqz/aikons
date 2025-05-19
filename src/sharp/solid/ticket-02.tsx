import React from "react";
const Ticket_02: React.FC<
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
        d="M13.361.96a.72.72 0 0 0-1.015 0L8.118 5.19 18.81 15.882l4.229-4.228a.72.72 0 0 0 0-1.015l-3.923-3.925-.778.778a1.295 1.295 0 1 1-1.831-1.83l.778-.779zM17.796 16.898 7.102 6.204.96 12.346a.72.72 0 0 0 0 1.015l3.924 3.924.777-.777a1.295 1.295 0 0 1 1.831 1.831l-.777.777 3.924 3.924c.28.28.735.28 1.015 0z"
      />
    </svg>
  );
};
export default Ticket_02;
