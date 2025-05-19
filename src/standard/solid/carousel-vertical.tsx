import React from "react";
const CarouselVertical: React.FC<
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
        d="M3 9a2.75 2.75 0 0 1 2.75-2.75h11.998a2.75 2.75 0 0 1 2.75 2.754l-.007 6a2.75 2.75 0 0 1-2.75 2.746H5.75A2.75 2.75 0 0 1 3 15z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.986 21a1 1 0 0 0-.894.553l-.447.895a1 1 0 1 1-1.79-.895l.448-.894A3 3 0 0 1 8.986 19h5.528a3 3 0 0 1 2.683 1.658l.448.894a1 1 0 1 1-1.79.895l-.446-.895a1 1 0 0 0-.895-.553zM6.303 1.106a1 1 0 0 1 1.342.447l.447.894A1 1 0 0 0 8.986 3h5.528a1 1 0 0 0 .895-.553l.447-.894a1 1 0 1 1 1.789.894l-.448.895A3 3 0 0 1 14.514 5H8.986a3 3 0 0 1-2.683-1.658l-.447-.895a1 1 0 0 1 .447-1.341"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CarouselVertical;
