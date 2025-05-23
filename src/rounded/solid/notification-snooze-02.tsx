import React from "react";
const NotificationSnooze_02: React.FC<
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
        d="M8.217 20.5A4.29 4.29 0 0 0 12 22.75a4.29 4.29 0 0 0 3.783-2.25zM18.933 3.25h-3.167a1 1 0 1 1 0-2h3.73c.335 0 .689 0 .969.04.271.04.883.173 1.154.806.268.625-.046 1.158-.2 1.383-.159.235-.399.497-.628.748L17.68 7.25h3.071a1 1 0 1 1 0 2h-3.622c-.349 0-.728 0-1.032-.038a2 2 0 0 1-.58-.149 1.27 1.27 0 0 1-.67-.66A1.23 1.23 0 0 1 14.87 7.4c.096-.21.237-.378.329-.481.091-.103.2-.212.296-.31z"
      />
      <path
        fill="currentColor"
        d="M13.522 2.41q-.737-.159-1.522-.16A7.25 7.25 0 0 0 4.75 9.5v5.307c0 1.32-.803 2.507-2.029 2.996A.75.75 0 0 0 3 19.25h18a.75.75 0 0 0 .279-1.447 3.23 3.23 0 0 1-2.029-2.996V10.5h-2.158c-.323 0-.767 0-1.15-.047a3.3 3.3 0 0 1-.931-.246 2.52 2.52 0 0 1-1.313-1.31 2.48 2.48 0 0 1 .035-2.018c.177-.385.42-.666.532-.791L15.846 4.5c-1.188 0-2.235-.922-2.324-2.09"
      />
    </svg>
  );
};
export default NotificationSnooze_02;
