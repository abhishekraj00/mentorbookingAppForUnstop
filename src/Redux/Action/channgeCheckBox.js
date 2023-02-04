import { CHANGE_CHECKBOX } from "./type";

const channgeCheckBox = (data,index) => {
  return {
    type: CHANGE_CHECKBOX,
    payload: {
      data:data,
      index:index,
    }
  };
};
export { channgeCheckBox };
