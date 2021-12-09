export const isNumber = (str: string) => {
     if(Number.isNaN(+str)) {
         return "Введите числовые значения";
     }
     else {
         if(+str < 0) {
             return "Число должно быть больше 0";
         }
         else {
             return "";
         }
     }
};
