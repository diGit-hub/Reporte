import React, { createContext, useState } from 'react';

export const MissionContext = createContext();

export const MissionProvider = ({ children }) => {
  const [missionData, setMissionData] = useState({
    mission: {
      zones: [
        {
          id: 1,
          name: 'Zona 1',
          districts: [
            {
              id: 1,
              name: 'Distrito 1',
              missionaries: [
                { id: 1, name: 'Missionário 1', status: 'dupla' },
                { id: 2, name: 'Missionário 2', status: 'dupla' },
              ],
            },
          ],
        },
      ],
    },
  });

  const updateProgress = (zoneId, districtId, missionaryId, indicator) => {
    // Lógica para atualizar o progresso
  };

  return (
    <MissionContext.Provider value={{ missionData, updateProgress }}>
      {children}
    </MissionContext.Provider>
  );
};
