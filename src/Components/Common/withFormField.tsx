import React from 'react';
import {observer} from 'mobx-react';
import { useModelStore } from "../../Base/ModelTree/ModelProvider";
import { useFieldStore } from "./useFieldStore";
import useSelectModel from './useSelectModel';

const withFormField = (Component:any)=>{
  const WithFormField = observer((props:any)=>{
    const {'data-rxid':rxid, field, onlyShow, forwardedRef, empertyValue, rule, helperText, graphiQL, ...rest} = props;
    const fieldStore = useFieldStore(props);
    const modelStore =  useModelStore();

    useSelectModel(fieldStore, rxid);

    const handleChange = (e:any) => {
      let newValue = e?.target?.value;
      fieldStore?.setValue(newValue);
      if(fieldStore?.error){
        fieldStore?.validate();        
      }
    }

    /*const handleBlur = (event:any)=>{
      if(event){
        event.stopPropagation();
        fieldStore?.validate();        
      }
    }*/

    const error = fieldStore?.error;
    const compent = <Component
      ref={forwardedRef}
      loading={fieldStore?.loading || modelStore?.loading}
      value={fieldStore?.value === undefined ? (empertyValue || '') : fieldStore?.value}
      {...rest}
      error={!! error}
      helperText = {error || helperText}
      onChange={handleChange}
      //onBlur={handleBlur}
      name = {field}
    />;
    return (
      compent
    )
  })
  return React.forwardRef((props, ref) => {
    return <WithFormField {...props} forwardedRef={ref} />;
  });
}

export default withFormField