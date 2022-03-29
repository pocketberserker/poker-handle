import toStringDate from "date-fns/format";
import parse from "date-fns/parse";

export const format = "yyyy-MM-dd";

export const nowString = (): string => toStringDate(new Date(), format);

export const parseDate = (day: string): Date => parse(day, format, new Date());
