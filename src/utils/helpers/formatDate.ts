import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

const DATE_FORMAT = 'yyyy-MM-dd';

export const formatDate = (date: Date): string | undefined => {
  const local = utcToZonedTime(
    date,
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const f = format(local, DATE_FORMAT);
  return f;
};
