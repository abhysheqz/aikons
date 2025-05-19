import React from "react";
const Mosque_05: React.FC<
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
        d="M17.52 6c-1.54-2 .824-3 1.484-4 .66 1 3.023 2 1.484 4zM13.042 11.5V14h-6v-2.5M7.057 11.5c-3.078-4 1.65-6 2.968-8 1.32 2 6.046 4 2.968 8H7.057ZM8.03 22v-1c0-.978 0-1.467.142-1.913q.142-.445.412-.826c.27-.38.66-.674 1.441-1.261.78.587 1.171.88 1.441 1.261q.271.381.413.826c.141.446.141.935.141 1.913v1"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m17.507 6-.498 8m0 8h3.99L20.5 6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.009 13.957H3.01a.01.01 0 0 0-.01.01V22H17.01z"
      />
    </svg>
  );
};
export default Mosque_05;
