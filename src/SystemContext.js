import React from "react";

export const system_context = {
  users: [
    {
      fname: "Fname1",
      lname: "Lname1",
      email: "test@test.com",
      transaction: [],
      points: 10.5
    },
    {
      fname: "Fname2",
      lname: "Lname2",
      email: "test2@test.com",
      transaction: [],
      points: 12.5
    }
  ],
  current_user: 0,
  achievement: [],
  redeem: []
};

export const SystemContext = React.createContext(system_context);
