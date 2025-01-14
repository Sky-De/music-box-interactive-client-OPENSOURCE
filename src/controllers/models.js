const RunStatus = Object.freeze({
  RUNNING: "RUNNING",
  WAITING: "WAITING",
  NOT_FOUND: "NOT_FOUND",
  DONE: "DONE",
  ERROR: "ERROR",
});

const ReactionTypes = Object.freeze({
  ARRHENIUS: "ARRHENIUS",
  PHOTOLYSIS: "PHOTOLYSIS",
  EMISSION: "EMISSION",
  FIRST_ORDER_LOSS: "FIRST_ORDER_LOSS",
  TERNARY_CHEMICAL_ACTIVATION: "TERNARY_CHEMICAL_ACTIVATION",
  TROE: "TROE",
  WENNBERG_NO_RO2: "WENNBERG_NO_RO2",
  WENNBERG_TUNNELING: "WENNBERG_TUNNELING",
});

export { ReactionTypes, RunStatus };
