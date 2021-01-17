import { IValidateRule } from "./IValidateRule";

export interface IMeta{
  name:string,
  props?:{
    //rule?:IValidateRule;
    [key:string]: any
  },
  field?:string,
  onlyShow?:boolean,
  rule?:IValidateRule,
  selfRender?:boolean,
  designProps?:{[key:string]: any},
  auths?:string[],
  graphiQL?:string,
}