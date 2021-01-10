
import {register, registerHtmlTag} from "./base/RxDrag";
import { Button, Divider, Typography } from '@material-ui/core';
import PortletGridItem from 'components/Portlet/GridItem';
import ListView from 'components/ListView';
import MediaSelect from 'components/Inputs/MediaSelect/MediaSelect';
import OneToManyTable from 'components/OneToMany/Table';
import Portlet from 'components/Portlet';
import PortletFooter from 'components/Portlet/Footer';
import FormGridContainer from 'components/Portlet/GridContainer';
import Combobox from 'components/Inputs/Select/Combobox';
import SelectBox from 'components/Inputs/Select/SelectBox';
import Canvas from 'components/Canvas';
import MediasPortlet from 'components/MediasPortlet';
import { HeadRule } from 'components/Head/Rule';
import { ButtonRule } from 'components/Buttons/Button/Rule';
import { DividerRule } from 'components/Divider/Rule';
import { CanvasRule } from 'components/Canvas/Rule';
import GridRow from 'components/Grid/Row';
import GridColumn from 'components/Grid/Column';
import { TypographyRule } from 'components/Typography/Rule';
import { PortletGridItemRule } from 'components/Portlet/GridItem/Rule';
import TextBox from 'components/Inputs/TextBox';
import { TextBoxRule } from 'components/Inputs/TextBox/Rule';
import { MediasPortletRule } from 'components/MediasPortlet/Rule';
import { SelectRule } from 'components/Inputs/Select/Rule';
import { OneToManyTableRule } from 'components/OneToMany/Table/Rule';
import { PortletRule } from 'components/Portlet/Rule';
import { ListViewRule } from 'components/ListView/Rule';
import { GridColumnRule } from 'components/Grid/Column/Rule';
import { GridRowRule } from 'components/Grid/Row/Rule';
import OneToManyPortlet from 'components/OneToMany/Portlet';
import { OneToManyPortletRule } from 'components/OneToMany/Portlet/Rule';
import MultiSelectBox from 'components/Inputs/Select/MultiSelectBox';
import SwitchBox from 'components/Inputs/SwitchBox';
import { SwitchBoxRule } from 'components/Inputs/SwitchBox/Rule';
import TinyMCE from 'components/Inputs/TinyMCE';
import {TinyMCERule} from 'components/Inputs/TinyMCE/Rule';
import TreeEditor from 'components/TreeEditor';
import { TreeEditorRule } from 'components/TreeEditor/Rule';
import TreeSelect from 'components/Inputs/TreeSelect';
import { TreeSelectRule } from 'components/Inputs/TreeSelect/Rule';
import Medias from 'components/Medias';
import AntDesignChart from 'components/AntDesignChart';
import Checkbox from 'components/Inputs/Checkbox';
import { CheckboxRule } from 'components/Inputs/Checkbox/Rule';
import CheckboxGroup from 'components/Inputs/CheckboxGroup';
import { CheckboxGroupRule } from 'components/Inputs/CheckboxGroup/Rule';
import RadioGroup from 'components/Inputs/RadioGroup';
import { RadioGroupRule } from 'components/Inputs/RadioGroup/Rule';
import { AntDesignChartRule } from 'components/AntDesignChart/Rule';
import { MediaSelectRule } from "components/Inputs/MediaSelect/Rule";
import TableColumn from "components/OneToMany/Table/TableColumn";
import { TableColumnRule } from "components/OneToMany/Table/TableColumn/Rule";
import TextView from "components/Displays/TextView";
import { TextViewRule } from "components/Displays/TextView/Rule";
import { EnumViewRule } from "components/Displays/EnumView/Rule";
import  EnumView  from "components/Displays/EnumView";
import { MediaViewRule } from "components/Displays/MediaView/Rule";
import MediaView from "components/Displays/MediaView";
import DayView from "components/Displays/DayView";
import { DayViewRule } from "components/Displays/DayView/Rule";

register('Canvas', Canvas, CanvasRule);
register('Divider', Divider, DividerRule);
register('GridRow', GridRow, GridRowRule);
register('GridColumn', GridColumn, GridColumnRule);
register('Button',Button, ButtonRule);
register('TextBox', TextBox, TextBoxRule);
register('SwitchBox', SwitchBox, SwitchBoxRule);
register('Checkbox', Checkbox, CheckboxRule);
register('CheckboxGroup', CheckboxGroup, CheckboxGroupRule);
register('RadioGroup', RadioGroup, RadioGroupRule);
register('Portlet', Portlet, PortletRule);
register('FormGridContainer', FormGridContainer);
register('PortletGridItem', PortletGridItem, PortletGridItemRule);
register('PortletFooter', PortletFooter);
register('Typography', Typography, TypographyRule);
register('ListView', ListView, ListViewRule);
register('MediasPortlet', MediasPortlet, MediasPortletRule);
register('SelectBox', SelectBox, SelectRule);
register('Combobox', Combobox, SelectRule);
register('MultiSelectBox', MultiSelectBox, SelectRule );
register ('TableColumn', TableColumn, TableColumnRule);
register('OneToManyTable', OneToManyTable, OneToManyTableRule);
register('OneToManyPortlet', OneToManyPortlet, OneToManyPortletRule);
register('TinyMCE', TinyMCE, TinyMCERule);
register('TreeEditor', TreeEditor, TreeEditorRule);
register('TreeSelect', TreeSelect, TreeSelectRule);
register('MediaSelect', MediaSelect, MediaSelectRule);
register('Medias', Medias);
register('AntDesignChart', AntDesignChart, AntDesignChartRule);

register('TextView', TextView, TextViewRule);
register('MediaView', MediaView, MediaViewRule);
register('EnumView', EnumView, EnumViewRule);
register('DayView', DayView, DayViewRule);

registerHtmlTag('h1', HeadRule);
registerHtmlTag('h2', HeadRule);
registerHtmlTag('h3', HeadRule);
registerHtmlTag('h4', HeadRule);
registerHtmlTag('h5', HeadRule);
registerHtmlTag('h6', HeadRule);