
import {register, registerHtmlTag} from "./rx-drag/RxDrag";
import { Divider, Typography } from '@material-ui/core';
import PortletGridItem from 'Components/Portlet/GridItem';
import ListView from 'Components/ListView';
import MediaSelect from 'Components/Inputs/MediaSelect/MediaSelect';
import OneToManyTable from 'Components/OneToMany/OneToManyTable';
import Portlet from 'Components/Portlet';
import PortletFooter from 'Components/Portlet/Footer';
import FormGridContainer from 'Components/Portlet/FormGridContainer';
import {Combobox} from 'Components/Inputs/Select/Combobox';
import {SelectBox} from 'Components/Inputs/Select/SelectBox';
import Canvas from 'Components/Canvas';
import MediasPortlet from 'Components/MediasPortlet';
import { HeadRule } from 'Components/Head/Rule';
import { ButtonConfig } from 'Components/Buttons/Button/Config';
import { DividerRule } from 'Components/Divider/Rule';
import { CanvasRule } from 'Components/Canvas/Rule';
import GridRow from 'Components/Grid/Row';
import GridColumn from 'Components/Grid/Column';
import { TypographyRule } from 'Components/Typography/Rule';
import { PortletGridItemRule } from 'Components/Portlet/GridItem/Rule';
import { TextBox }from 'Components/Inputs/TextBox';
import { TextBoxRule } from 'Components/Inputs/TextBox/Rule';
import { MediasPortletRule } from 'Components/MediasPortlet/Rule';
import { SelectRule } from 'Components/Inputs/Select/Rule';
import { OneToManyTableRule } from 'Components/OneToMany/OneToManyTable/Rule';
import { PortletRule } from 'Components/Portlet/Rule';
import { ListViewRule } from 'Components/ListView/Rule';
import { GridColumnRule } from 'Components/Grid/Column/Rule';
import { GridRowRule } from 'Components/Grid/Row/Rule';
import OneToManyPortlet from 'Components/OneToMany/OneToManyPortlet';
import { OneToManyPortletRule } from 'Components/OneToMany/OneToManyPortlet/Rule';
import { MultiSelectBox } from 'Components/Inputs/Select/MultiSelectBox';
import { SwitchBox } from 'Components/Inputs/SwitchBox';
import { SwitchBoxRule } from 'Components/Inputs/SwitchBox/Rule';
import TinyMCE from 'Components/Inputs/TinyMCE';
import {TinyMCERule} from 'Components/Inputs/TinyMCE/Rule';
import TreeEditor from 'Components/TreeEditor';
import { TreeEditorRule } from 'Components/TreeEditor/Rule';
import TreeSelect from 'Components/Inputs/TreeSelect';
import { TreeSelectRule } from 'Components/Inputs/TreeSelect/Rule';
import Medias from 'Components/Medias';
import AntDesignChart from 'Components/AntDesignChart';
import Checkbox from 'Components/Inputs/Checkbox';
import { CheckboxRule } from 'Components/Inputs/Checkbox/Rule';
import CheckboxGroup from 'Components/Inputs/CheckboxGroup';
import { CheckboxGroupRule } from 'Components/Inputs/CheckboxGroup/Rule';
import RadioGroup from 'Components/Inputs/RadioGroup';
import { RadioGroupRule } from 'Components/Inputs/RadioGroup/Rule';
import { AntDesignChartRule } from 'Components/AntDesignChart/Rule';
import { MediaSelectRule } from "Components/Inputs/MediaSelect/Rule";
import TableColumn from "Components/OneToMany/OneToManyTable/TableColumn";
import { TableColumnRule } from "Components/OneToMany/OneToManyTable/TableColumn/Rule";
import TextView from "Components/Displays/TextView";
import { TextViewRule } from "Components/Displays/TextView/Rule";
import { EnumViewRule } from "Components/Displays/EnumView/Rule";
import  EnumView  from "Components/Displays/EnumView";
import { MediaViewRule } from "Components/Displays/MediaView/Rule";
import MediaView from "Components/Displays/MediaView";
import DayView from "Components/Displays/DayView";
import { DayViewRule } from "Components/Displays/DayView/Rule";
import ListViewBody from "Components/ListView/ListViewBody";
import { ListViewBodyRule } from "Components/ListView/ListViewBody/Rule";
import { ListViewToolbarRule } from "Components/ListView/ListViewToolbar/Rule";
import ListViewToolbar from "Components/ListView/ListViewToolbar";
import ListViewFilters from "Components/ListView/ListViewFilters";
import { ListViewBatchActionsRule } from "Components/ListView/ListViewBatchActions/Rule";
import ListViewBatchActions from "Components/ListView/ListViewBatchActions";
import ListViewEnumFilter from "Components/ListView/ListViewFilters/ListViewEnumFilter";
import { ListViewEnumFilterRUle } from "Components/ListView/ListViewFilters/ListViewEnumFilter/Rule";
import { ListViewFiltersRule } from "Components/ListView/ListViewFilters/Rule";
import { ListViewKeywordFilterRule } from "Components/ListView/ListViewFilters/ListViewKeywordFilter/Rule";
import ListViewKeywordFilter from "Components/ListView/ListViewFilters/ListViewKeywordFilter";
import Button from "Components/Buttons/Button";
import ListViewPagination from "Components/ListView/ListViewPagination";
import { ListViewPaginationRule } from "Components/ListView/ListViewPagination/Rule";
import { IconButtonConfig } from "Components/Buttons/IconButton/Config";
import IconButton from "Components/Buttons/IconButton";
import JsxTemplateParser from "Components/JsxTemplateParser";
import { JsxTemplateParserRule } from "Components/JsxTemplateParser/Rule";
import { ListViewBodyTableRow } from "Components/ListView/ListViewBody/ListViewBodyTableRow";
import withFormField from "Components/Common/withFormField";
import withSkeleton from "Base/HOCs/withSkeleton";

register('Canvas', Canvas, CanvasRule);
register('Divider', Divider, DividerRule);
register('GridRow', GridRow, GridRowRule);
register('GridColumn', GridColumn, GridColumnRule);
register('Button',Button, ButtonConfig);
register('IconButton', IconButton, IconButtonConfig);
register('TextBox', withFormField(withSkeleton(TextBox)), TextBoxRule);
register('SwitchBox', withFormField(withSkeleton(SwitchBox)), SwitchBoxRule);
register('Checkbox', Checkbox, CheckboxRule);
register('CheckboxGroup', CheckboxGroup, CheckboxGroupRule);
register('RadioGroup', RadioGroup, RadioGroupRule);
register('Portlet', Portlet, PortletRule);
register('FormGridContainer', FormGridContainer);
register('PortletGridItem', PortletGridItem, PortletGridItemRule);
register('PortletFooter', PortletFooter);
register('Typography', Typography, TypographyRule);
register('ListView', ListView, ListViewRule);
register('ListViewBody', ListViewBody, ListViewBodyRule);
register('ListViewToolbar', ListViewToolbar, ListViewToolbarRule);
register('ListViewFilters', ListViewFilters, ListViewFiltersRule);
register('ListViewKeywordFilter', ListViewKeywordFilter, ListViewKeywordFilterRule);
register('ListViewEnumFilter', ListViewEnumFilter, ListViewEnumFilterRUle);
register('ListViewBatchActions', ListViewBatchActions, ListViewBatchActionsRule);
register('ListViewPagination', ListViewPagination, ListViewPaginationRule);
register('ListViewBodyTableRow', ListViewBodyTableRow);
register('MediasPortlet', MediasPortlet, MediasPortletRule);
register('SelectBox', withFormField(SelectBox), SelectRule);
register('Combobox', withFormField(Combobox), SelectRule);
register('MultiSelectBox', withFormField(MultiSelectBox), SelectRule );
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

register('JsxTemplateParser', JsxTemplateParser, JsxTemplateParserRule);

registerHtmlTag('h1', HeadRule);
registerHtmlTag('h2', HeadRule);
registerHtmlTag('h3', HeadRule);
registerHtmlTag('h4', HeadRule);
registerHtmlTag('h5', HeadRule);
registerHtmlTag('h6', HeadRule);