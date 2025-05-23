import React from "react";
const SortingUp: React.FC<
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
        d="M8.847 18.183h1.002c.071 0 .205 0 .323-.016.133-.019.519-.096.726-.477a.86.86 0 0 0-.014-.834 2 2 0 0 0-.174-.256l-.011-.014c-.25-.328-.663-.852-1.077-1.3a6 6 0 0 0-.645-.622 2.4 2.4 0 0 0-.37-.25A1.3 1.3 0 0 0 8 14.25c-.269 0-.486.098-.607.163a2.4 2.4 0 0 0-.37.251c-.217.175-.44.4-.645.621-.414.449-.827.973-1.077 1.3l-.01.015c-.042.054-.12.156-.175.256a.86.86 0 0 0-.013.834c.206.381.592.458.725.477.118.017.252.017.323.016h1.002V21.2c0 .442.38.8.847.8.468 0 .847-.358.847-.8zM16.847 18.183h1.002c.071 0 .205 0 .323-.016.133-.019.519-.096.726-.477a.86.86 0 0 0-.014-.834 2 2 0 0 0-.174-.256l-.011-.014c-.25-.328-.663-.852-1.077-1.3a6 6 0 0 0-.645-.622 2.4 2.4 0 0 0-.37-.25A1.3 1.3 0 0 0 16 14.25c-.269 0-.486.098-.607.163a2.4 2.4 0 0 0-.37.251c-.217.175-.44.4-.645.621-.414.449-.827.973-1.077 1.3l-.01.015c-.042.054-.12.156-.175.256a.86.86 0 0 0-.014.834c.207.381.593.458.726.477.118.017.252.017.323.016h1.002V21.2c0 .442.38.8.847.8.468 0 .847-.358.847-.8zM12.847 5.183h1.002c.071 0 .205 0 .323-.016.133-.019.519-.096.726-.477a.86.86 0 0 0-.014-.834 2 2 0 0 0-.174-.256l-.011-.014c-.25-.328-.663-.852-1.077-1.3a6 6 0 0 0-.645-.622 2.4 2.4 0 0 0-.37-.25A1.3 1.3 0 0 0 12 1.25c-.269 0-.486.099-.607.163a2.4 2.4 0 0 0-.37.251c-.217.175-.44.4-.645.621A19 19 0 0 0 9.29 3.6c-.041.054-.12.156-.174.256a.86.86 0 0 0-.013.834c.206.381.592.458.725.477.118.017.252.017.323.016h1.002V8.2c0 .442.38.8.847.8.468 0 .847-.358.847-.8z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 8a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1M2 12a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SortingUp;
