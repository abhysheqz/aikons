import React from "react";
const Infant: React.FC<
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
        d="M3.689 7.258a8.753 8.753 0 0 1 16.623 0q.093-.008.188-.008a2.25 2.25 0 0 1 .075 4.499 8.753 8.753 0 0 1-17.15 0 2.25 2.25 0 1 1 .264-4.491M12 2.75a7.25 7.25 0 0 0-7.061 5.598.75.75 0 0 1-1.085.49.75.75 0 1 0-.08 1.36.75.75 0 0 1 1.021.615 7.251 7.251 0 0 0 14.41 0 .75.75 0 0 1 1.02-.615.75.75 0 1 0-.079-1.36.75.75 0 0 1-1.085-.49A7.25 7.25 0 0 0 12 2.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.25 14a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75 1.75 1.75 0 1 1-3.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.535 16.938a.75.75 0 0 1 .496-.188l3.969 1 3.969-1a.75.75 0 0 1 .496.188A6.74 6.74 0 0 1 18.75 22a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75c0-2.016.885-3.827 2.285-5.062"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.25 2a.75.75 0 0 1 .75-.75c1.389 0 2.75 1.206 2.75 2.75S13.389 6.75 12 6.75c-.66 0-1.392-.234-1.948-.649a.75.75 0 1 1 .896-1.202c.293.218.711.351 1.052.351.611 0 1.25-.585 1.25-1.25 0-.666-.639-1.25-1.25-1.25a.75.75 0 0 1-.75-.75M9 9a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1M15 9a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Infant;
