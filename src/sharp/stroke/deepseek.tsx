import React from "react";
const Deepseek: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M20.725 6.166c-1.128 0-1.771.786-1.771.786-.216-1.023-.859-1.324-1.593-1.665-.465-.216-.659-.696-.722-1.043-.024-.133-.133-.24-.268-.24-.134 0-.262.055-.326.173-.139.25-.354.8-.373 1.81-.029 1.503 1.21 2.662 1.834 3.053-.064.37-.29.942-.395 1.182a4.9 4.9 0 0 1-1.87-1.234c-.958-1.043-1.738-1.781-2.756-2.503s-.337-1.583.09-1.788.103-.415-.962-.379c-.853.029-2.067.53-2.567.777-.51-.162-1.572-.194-2.038-.19C2.425 4.905 1 8.98 1 11c0 6.086 4.873 9 8.373 9 3.958 0 5.345-1.614 5.345-1.614.164.101.76.316 1.838.362 1.349.057 1.851-.324 1.89-.617s-.179-.4-.37-.49c-.19-.089-.49-.26-1.055-.445-.453-.147-.657-.308-.702-.37 2.73-2.472 3.23-5.935 3.153-7.407 2.112-.082 2.943-1.488 3.217-2.2.28-.726.454-1.716.164-1.94-.232-.18-.426.036-.494.167-.372.396-.644.719-1.635.719Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M12 10.568s.876-.27 1.645.255c1.041.71 1.355 1.676 1.355 1.676M13.5 16.499s-1.041-.507-2.604-2.539c-1.878-2.44-3.647-5.074-7.367-4.213 0 0-.029 5.25 4.971 6.752"
      />
    </svg>
  );
};
export default Deepseek;
