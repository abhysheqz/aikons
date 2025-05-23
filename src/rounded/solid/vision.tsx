import React from "react";
const Vision: React.FC<
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
        d="M9.186 2.45a1 1 0 0 1-.95 1.049c-2.072.102-3.037.41-3.682 1.055-.646.645-.953 1.61-1.055 3.682A1 1 0 0 1 1.5 8.137c.106-2.127.422-3.78 1.639-4.997C4.356 1.923 6.01 1.607 8.137 1.5a1 1 0 0 1 1.049.95m5.629 0a1 1 0 0 1 1.048-.949c2.127.106 3.78.422 4.997 1.639 1.217 1.216 1.533 2.87 1.639 4.997a1 1 0 0 1-1.998.1c-.102-2.073-.41-3.038-1.055-3.683-.645-.646-1.61-.953-3.682-1.055a1 1 0 0 1-.95-1.048M2.45 14.816a1 1 0 0 1 1.048.949c.102 2.072.41 3.037 1.055 3.682.645.646 1.61.953 3.682 1.055a1 1 0 0 1-.099 1.998c-2.127-.106-3.78-.422-4.997-1.639-1.217-1.216-1.533-2.87-1.639-4.997a1 1 0 0 1 .95-1.048m19.098 0a1 1 0 0 1 .95 1.048c-.106 2.127-.422 3.78-1.639 4.997-1.216 1.217-2.87 1.533-4.997 1.639a1 1 0 1 1-.1-1.998c2.073-.102 3.038-.41 3.683-1.055.646-.645.953-1.61 1.055-3.682a1 1 0 0 1 1.048-.95M12 6.25c-2.077 0-3.86.816-5.243 1.78s-2.453 2.162-3.026 2.878c-.193.239-.481.593-.481 1.092s.288.853.481 1.092c.573.716 1.643 1.913 3.026 2.877S9.923 17.75 12 17.75s3.86-.817 5.243-1.78c1.383-.965 2.453-2.161 3.026-2.878.193-.239.481-.593.481-1.092s-.288-.853-.481-1.092c-.573-.716-1.643-1.913-3.026-2.877C15.86 7.066 14.077 6.25 12 6.25m0 8.5a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Vision;
