import React from "react";
const Fencing: React.FC<
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
        d="M4.47 13.177c1.394-1.395 3.676-1.142 5.086.268s1.663 3.692.268 5.086a.75.75 0 0 1-1.06 0l-1.295-1.295-2.656 3.8-.032.042a1.74 1.74 0 0 1-1.532.666c-.52-.045-.989-.306-1.327-.636-.339-.33-.615-.794-.664-1.323-.053-.566.164-1.128.674-1.546l.036-.027 3.758-2.718-1.256-1.257a.75.75 0 0 1 0-1.06"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.457 2.543a1 1 0 0 1 0 1.414L9.483 14.931a1 1 0 0 1-1.415-1.414L19.043 2.543a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19.53 13.177c-1.394-1.395-3.676-1.142-5.086.268s-1.663 3.692-.268 5.086a.75.75 0 0 0 1.06 0l1.296-1.295 2.655 3.8q.014.021.032.042c.413.51.976.714 1.532.666.52-.045.989-.306 1.327-.636.339-.33.615-.794.664-1.323.053-.566-.164-1.128-.674-1.546l-.036-.027-3.759-2.718 1.257-1.257a.75.75 0 0 0 0-1.06"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.543 2.543a1 1 0 0 0 0 1.414l10.974 10.974a1 1 0 0 0 1.415-1.414L4.957 2.543a1 1 0 0 0-1.414 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Fencing;
