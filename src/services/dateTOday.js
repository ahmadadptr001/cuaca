import { format } from "date-fns";
import { id } from "date-fns/locale";

export const convert = dt => {
    // format dt adalah xx - xx - xxxx
    const date = new Date(dt);
    const day = format(date, "EEEE", { locale: id });
    return day;
};
