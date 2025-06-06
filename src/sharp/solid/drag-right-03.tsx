import React from "react";
const DragRight_03: React.FC<
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
        d="M9.964 4.25c-.613 0-1.124.5-1.124 1.135v10.603l-2.849-2.791a1.356 1.356 0 0 0-1.94.193 1.39 1.39 0 0 0 .007 1.738l.01.012 4.773 6.401v1.209h9.373v-1.225c.143-.17.665-.788.863-1.035s.4-.507.561-.734c.173-.24.273-.406.3-.48.15-.39.23-.843.27-1.49.042-.65.042-1.469.042-2.584 0-.566 0-.961-.032-1.265-.032-.296-.09-.46-.173-.58a1.1 1.1 0 0 0-.277-.278c-.118-.083-.278-.14-.571-.171-.29-.03-.663-.032-1.193-.033v1.646h-.808v-2.043a1.13 1.13 0 0 0-1.123-1.135h-1.17c.046.426.046.954.046 1.597v1.07h-.807v-1.042c0-.733-.001-1.244-.053-1.63-.05-.374-.142-.57-.28-.708-.136-.137-.327-.227-.697-.277-.307-.041-.696-.05-1.217-.052V13.5h-.808V5.385A1.13 1.13 0 0 0 9.964 4.25"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.234 2.75a3.25 3.25 0 1 0 .001 6.5v1.5a4.75 4.75 0 1 1 4.69-5.5h2.233l-1.22-1.22L17 2.97 20.03 6 17 9.03l-1.06-1.06 1.22-1.22h-3.675V6a3.25 3.25 0 0 0-3.25-3.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DragRight_03;
