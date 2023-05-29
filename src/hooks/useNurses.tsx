import { useEffect, useState } from "react";
import { setupAPIClient } from "~/services/api";

export interface INurseProps {
  id: string;
  name: string;
  instruction: string;
  photo_path: string;
  //created_at: string;
  //updated_at: string;
  service_id: string;
}

export interface IRequestProps {
  serviceId: string;
}

export const useNurses = ({ serviceId }: IRequestProps) => {
  const [nurses, setNurses] = useState<INurseProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (! serviceId) serviceId = "1";

    setLoading(true);
    async function loadNurses() {
      /*const apiClient = setupAPIClient();
      const response = await apiClient.get('/service/nurse/', {
        params:{
          service_id: serviceId
        }
      });

      setNurses(response.data);*/

      const nurses = [
        {
          id: "1",
          name: "ENFª. ALANA BEATRIZ CASAROTTO",
          instruction: "ENFERMAGEM",
          photo_path: "/nurses/2d72b61caf25f10344c3dc954c7fa714-download.jpeg",
          service_id: "1"
        },
        {
          id: "2",
          name: "ENFª MELISSA PENTEADO",
          instruction: "TÉCN. ENFERMAGEM",
          photo_path: "/nurses/560x1343-1.png",
          service_id: "2"
        },
        {
          id: "3",
          name: "ENFª ANA PAULA",
          instruction: "ENFERMAGEM",
          photo_path: "/nurses/30059ea4ae39896f101c7db77ce9e063-images.jpeg",
          service_id: "1"
        },
        {
          id: "4",
          name: "ENFª KARINY DE PAULA",
          instruction: "TÉCN. ENFERMAGEM",
          photo_path: "/nurses/35b80a559b76b38fbc0edf7fbabaa40a-nurse.avif",
          service_id: "2"
        },
      ];

      const nursesFiltered = nurses.filter((item) => {
        return (item.service_id == serviceId);
      });

      setNurses(nursesFiltered);

      setLoading(false);
    }

    loadNurses();
  }, [serviceId]);

  return { nurses, loading };
}