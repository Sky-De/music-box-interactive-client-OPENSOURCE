const utils = {
  methods: {
    NONE_SELECTED: "NONE_SELECTED",
    USE_TEMPLATE: "USE_TEMPLATE",
    START_FROM_SCRATCH: "START_FROM_SCRATCH",
    UPLOAD_CONFIG: "UPLOAD_CONFIG",
  },
  action_types: {
    RESET_ALL: "RESET_ALL",
    RESET_PLOTS: "RESET_PLOTS",
    ADD_AEROSOL_SPECIES: "ADD_AEROSOL_SPECIES",
    REMOVE_AEROSOL_SPECIES: "REMOVE_AEROSOL_SPECIES",
    ADD_AEROSOL_PROPERTY: "ADD_AEROSOL_PROPERTY",
    ADD_GAS_SPECIES: "ADD_GAS_SPECIES",
    REMOVE_GAS_SPECIES: "REMOVE_GAS_SPECIES",
    ADD_PROPERTY: "ADD_PROPERTY",
    REMOVE_PROPERTY: "REMOVE_PROPERTY",
    ADD_REACTION: "ADD_REACTION",
    UPDATE_REACTION_DATA: "UPDATE_REACTION_DATA",
    REMOVE_REACTION: "REMOVE_REACTION",
    ADD_REACTANT: "ADD_REACTANT",
    REMOVE_REACTANT: "REMOVE_REACTANT",
    ADD_PRODUCT: "ADD_PRODUCT",
    REMOVE_PRODUCT: "REMOVE_PRODUCT",
    UPDATE_BASIC_CONFIGURATION: "UPDATE_BASIC_CONFIGURATION",
    ADD_CONDITION: "ADD_CONDITION",
    REMOVE_CONDITION: "REMOVE_CONDITION",
    UPDATE_EVOLVING_CONDITIONS: "UPDATE_EVOLVING_CONDITIONS",
    UPDATE_EVOLVING_TIME: "UPDATE_EVOLVING_TIME",
    UPDATE_EVOLVING_CONDITION_VALUE: "UPDATE_EVOLVING_CONDITION_VALUE",
    RESORT_EVOLVING_CONDITIONS: "RESORT_EVOLVING_CONDITIONS",
    ADD_EVOLVING_CONDITION: "ADD_EVOLVING_CONDITION",
    ADD_EVOLVING_TIME: "ADD_EVOLVING_TIME",
    REMOVE_EVOLVING_CONDITION: "REMOVE_EVOLVING_CONDITION",
    REMOVE_EVOLVING_TIME: "REMOVE_EVOLVING_TIME",
    LOAD_EVOLVING_CONDITIONS_TABLE: "LOAD_EVOLVING_CONDITIONS_TABLE",
    LOAD_CONFIG: "LOAD_CONFIG",
    EXAMPLE_FETCHED: "EXAMPLE_FETCHED",
    START_POLLING: "START_POLLING",
    UPDATE_RUN_STATUS: "UPDATE_RUN_STATUS",
    ADD_PLOT: "ADD_PLOT",
    REMOVE_PLOT: "REMOVE_PLOT",
    SHOW_COOKIE_BANNER: "SHOW_COOKIE_BANNER",
    HIDE_COOKIE_BANNER: "HIDE_COOKIE_BANNER",
  },
  examples: {
    CHAPMAN: "CHAPMAN",
    FLOW_TUBE: "FLOW_TUBE",
    FULL_GAS_PHASE: "FULL_GAS_PHASE",
  },
};

export default utils;
