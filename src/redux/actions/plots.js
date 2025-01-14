import utils from "../utils";

export const addPlot = (content) => {
  return {
    type: utils.action_types.ADD_PLOT,
    payload: { content },
  };
};

export const removePlot = (content) => {
  return {
    type: utils.action_types.REMOVE_PLOT,
    payload: { content },
  };
};
