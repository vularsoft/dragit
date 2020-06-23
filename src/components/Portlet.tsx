import React, { useRef, Fragment } from 'react';
import { makeStyles, Theme, createStyles, Paper, Typography, Divider } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import classNames from 'classnames';
import PortletFormGridBody from './PortletFormGridBody';
import FormGridItem from './FormGridItem';
import PortletFooter from './PortletFooter';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    portlet: {
      flex:1,
    },

    header:{
      padding:theme.spacing(2),
      display: 'flex',
      flexFlow: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    indicator:{
      transition:"all 0.3s",
      cursor:'pointer',
    },

    opened:{
      transform:'rotate(90deg)',
    },

    body:{
      transition:'all 0.3s',
      overflow:'hidden',
    },

    bodyClose:{
      height:'0px',
    },
    bodyInner:{
      //padding:theme.spacing(2),
    }

  }),
);

interface PortletProps{
  hasTitle:boolean;
  children?:any;
  open?:boolean;
  title?:string;
  scalable?:boolean;
}

const Portlet = React.forwardRef((props: PortletProps, ref:any) => {
  const classes = useStyles();
  const {open,hasTitle, title, scalable, ...rest} = props;
  const [opened, setOpened] = React.useState(open);

  const hendleClickChevronIcon = ()=>{
    setOpened(!opened)
  }

  const bodyInnerRef = useRef(null);

  let height = bodyInnerRef?.current ? (bodyInnerRef?.current as any).getBoundingClientRect().height + 'px': '';

  height = scalable ? (opened ? height : '0px') : 'auto';

  return (
    <Paper
      ref={ref}
      {...rest}
      className = {classes.portlet}
    >
      {hasTitle && 
        <Fragment>
          <div className = {classes.header}>
            <Typography variant="h5">
              {title}
            </Typography>
            {
              scalable &&
              <ChevronRightIcon 
                className={
                  classNames(classes.indicator,  {[classes.opened] : opened})
                } 
                onClick ={hendleClickChevronIcon} 
              />
            }
          </div>
          <Divider></Divider>
        </Fragment>
      }
      <div className ={classNames(classes.body,  {[classes.bodyClose] : !opened})}
        style ={{
          height: height
        }}
      >
        <div ref={bodyInnerRef} className={classes.bodyInner}>
          <PortletFormGridBody>
            <FormGridItem>xxx</FormGridItem>            
            <FormGridItem>xxx</FormGridItem>
          </PortletFormGridBody>
          <PortletFooter>
            Footer
          </PortletFooter> 
          {props.children}
        </div>
      </div>
    </Paper>
  )
});

export default Portlet;