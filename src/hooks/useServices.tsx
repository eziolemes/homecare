import { useEffect, useState } from "react";
import { setupAPIClient } from "~/services/api";


export interface IServiceProps {
  id: string;
  description: string;
}

export const useServices = () => {
  const [services, setServices] = useState<IServiceProps[]>([]);

  useEffect(() => {
    async function loadServices() {
      //const apiClient = setupAPIClient();
      //const response = await apiClient.get('/service');
      //setServices(response.data);

      const services = [
        {
          id: "1",
          description: "ADMINISTRAÇÃO DE MEDICAMENTO I.M."
        },
        {
          id: "2",
          description: "CURATIVO"
        },
      ];

      setServices(services);
    }

    loadServices();
  }, []);

  return { services };
}