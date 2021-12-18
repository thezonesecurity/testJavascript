let person = {
    name: "Goku",
    level: 8000,
    tipo: "sayayin",
    enemys: ["Freezer", "Cell", "Majimbo"],
    rival: {
      name: "Vegeta",
      level: 12000,
      enemys: ["Freezer", "Cell", "Majimbo"],
      events: {
        name1: () => {
          console.log("primera funcion 1");
        },
        name2: () => {
          console.log("primera funcion 2");
        },
      },
    },
  };
  // const { tipo } = person;
  // const { rival, level } = person;
  // const { name } = rival;
  // const { rival: anothername } = person;
  // const {
  //   rival: { enemys },
  // } = person;
  const {
    rival: {
      events: { name1 },
    },
  } = person;
  console.log(name1());