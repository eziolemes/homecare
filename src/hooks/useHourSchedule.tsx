import { useEffect, useState } from "react";

export interface IHourProps {
  id: string;
  hour: string;
  date_id: string;
}

export interface IRequestProps {
  date_id: string;
}

export const useHourSchedule = ({ date_id }: IRequestProps) => {
  const [hoursSchedule, setHoursSchedule] = useState<IHourProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!date_id) return;

    setLoading(true);
    async function loadHourSchedule() {
      const calendar = [
        {
          id: "1",
          hour: "07:00",
          date_id: "1",
        },
        {
          id: "2",
          hour: "15:00",
          date_id: "1",
        },
        {
          id: "3",
          hour: "08:00",
          date_id: "2",
        },
        {
          id: "4",
          hour: "13:00",
          date_id: "2",
        },
        {
          id: "5",
          hour: "09:00",
          date_id: "3",
        },
        {
          id: "6",
          hour: "16:00",
          date_id: "3",
        },
        {
          id: "7",
          hour: "06:00",
          date_id: "4",
        },
        {
          id: "8",
          hour: "09:30",
          date_id: "5",
        },
        {
          id: "9",
          hour: "07:40",
          date_id: "5",
        },
        {
          id: "10",
          hour: "13:00",
          date_id: "6",
        },
        {
          id: "11",
          hour: "17:00",
          date_id: "6",
        },
        {
          id: "12",
          hour: "13:15",
          date_id: "7",
        },
        {
          id: "13",
          hour: "10:00",
          date_id: "8",
        },
        {
          id: "14",
          hour: "12:00",
          date_id: "8",
        },
        {
          id: "15",
          hour: "11:00",
          date_id: "9",
        },
        {
          id: "16",
          hour: "18:00",
          date_id: "9",
        },
        {
          id: "17",
          hour: "12:30",
          date_id: "10",
        },
        {
          id: "18",
          hour: "18:00",
          date_id: "10",
        },
        {
          id: "19",
          hour: "07:00",
          date_id: "11",
        },
        {
          id: "20",
          hour: "12:00",
          date_id: "11",
        },
        {
          id: "21",
          hour: "14:30",
          date_id: "11",
        },
      ];

      const hoursScheduleFiltered = calendar.filter((item) => {
        return (item.date_id === date_id);
      });

      setHoursSchedule(hoursScheduleFiltered);

      setLoading(false);
    }

    loadHourSchedule();
  }, [date_id]);

  return { hoursSchedule, loading };
}