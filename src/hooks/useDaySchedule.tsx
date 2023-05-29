import { useEffect, useState } from "react";
import { setupAPIClient } from "~/services/api";

export interface IDateProps {
  id: string;
  date: string;
  nurse_id: string;
}

export interface IRequestProps {
  nurse_id: string;
}

export const useDaySchedule = ({ nurse_id }: IRequestProps) => {
  const [daysSchedule, setDaysSchedule] = useState<IDateProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!nurse_id) return;

    setLoading(true);
    async function loadDaysSchedule() {
      /*const apiClient = setupAPIClient();
      const response = await apiClient.get(`/nurse/${nurse_id}/schedule`);
      setDaysSchedule(response.data);*/

      const calendar = [
        {
          id: "1",
          date: "30/05/2023",
          nurse_id: "1"
        },
        {
          id: "2",
          date: "01/06/2023",
          nurse_id: "1"
        },
        {
          id: "3",
          date: "03/06/2023",
          nurse_id: "1"
        },

        // 2
        {
          id: "4",
          date: "30/05/2023",
          nurse_id: "2"
        },
        {
          id: "5",
          date: "01/06/2023",
          nurse_id: "2"
        },
        {
          id: "6",
          date: "03/06/2023",
          nurse_id: "2"
        },

        // 3
        {
          id: "7",
          date: "31/05/2023",
          nurse_id: "3"
        },
        {
          id: "8",
          date: "02/06/2023",
          nurse_id: "3"
        },

        // 4
        {
          id: "9",
          date: "31/05/2023",
          nurse_id: "4"
        },
        {
          id: "10",
          date: "02/06/2023",
          nurse_id: "4"
        },
        {
          id: "11",
          date: "03/06/2023",
          nurse_id: "4"
        },
      ];

      const datesScheduleFiltered = calendar.filter((item) => {
        return (item.nurse_id === nurse_id);
      });

      setDaysSchedule(datesScheduleFiltered);

      setLoading(false);
    }

    loadDaysSchedule();
    //console.log('daysSchedule');
    //console.log(daysSchedule);
  }, [nurse_id]);

  return { daysSchedule, loading };
}
