export const ifOnlyLetters = (str: string) => {
   if(/[a-zа-я]/i.test(str)) {
      return "";
   }
   else {
      return "Введите только буквы";
   }
}